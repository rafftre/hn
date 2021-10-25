package it.rafftre.hackernoon;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

/**
 * @author Raffaele Tretola (raffaele.tretola@clubtech.it)
 */
@Repository
public interface ReactionsRepository extends JpaRepository<Reactions, String> {

    Optional<Reactions> findByPostId(String postId);
}
