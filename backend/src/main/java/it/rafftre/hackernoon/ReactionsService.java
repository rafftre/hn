package it.rafftre.hackernoon;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Optional;

/**
 * @author Raffaele Tretola (raffaele.tretola@clubtech.it)
 */
@Service
public class ReactionsService {

    @Autowired
    private ReactionsRepository reactionsRepository;

    public Page<Reactions> getAll(int pageNum, int pageSize) {
        return reactionsRepository.findAll(PageRequest.of(pageNum, pageSize, Sort.by(Sort.Order.asc("postId"))));
    }

    public Optional<Reactions> getByPostId(String postId) {
        return reactionsRepository.findByPostId(postId);
    }

    @Transactional
    public Reactions save(Reactions reactions) {
        return reactionsRepository.save(reactions);
    }

    @Transactional
    public void delete(String postId) {
        reactionsRepository.deleteById(postId);
    }
}
