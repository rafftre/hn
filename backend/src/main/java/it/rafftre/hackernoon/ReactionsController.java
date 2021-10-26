package it.rafftre.hackernoon;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Optional;

/**
 * @author Raffaele Tretola (raffaele.tretola@clubtech.it)
 */
@CrossOrigin(
        origins = { "*" },
        allowedHeaders = { "*" },
        methods = {
                RequestMethod.GET,
                RequestMethod.HEAD,
                RequestMethod.POST,
                RequestMethod.PUT,
                RequestMethod.DELETE,
                RequestMethod.OPTIONS
        })
@RestController
@RequestMapping("/api/v1/reactions")
public class ReactionsController {

    @Autowired
    private ReactionsService reactionsService;

    @GetMapping
    public Page<Reactions> getAll(
            @RequestParam(name = "page", defaultValue = "0") int pageNum,
            @RequestParam(name = "size", defaultValue = "20") int pageSize) {
        return reactionsService.getAll(pageNum, pageSize);
    }

    @PostMapping
    public Reactions create(@RequestBody @Valid Reactions reactions) {
        Optional<Reactions> existing = reactionsService.getByPostId(reactions.getPostId());
        if (existing.isPresent()) {
            throw new ReactionsAlreadyExistsException();
        }
        return reactionsService.save(reactions);
    }

    @GetMapping(value = "{id}")
    public Reactions getByPostId(@PathVariable("id") String postId) {
        return reactionsService.getByPostId(postId)
                .orElseThrow(() -> new ReactionsNotFoundException(postId));
    }

    @PutMapping(value = "{id}")
    public Reactions update(@PathVariable("id") String postId, @RequestBody @Valid Reactions reactions) {
        Reactions existing = reactionsService.getByPostId(postId)
                .orElseThrow(() -> new ReactionsNotFoundException(postId));
        existing.setLight(reactions.getLight());
        existing.setBoat(reactions.getBoat());
        existing.setHeart(reactions.getHeart());
        existing.setMoney(reactions.getMoney());
        return reactionsService.save(reactions);
    }

    @DeleteMapping(value = "{id}")
    public String delete(@PathVariable("id") String postId) {
        Reactions existing = reactionsService.getByPostId(postId)
                .orElseThrow(() -> new ReactionsNotFoundException(postId));
        reactionsService.delete(postId);
        return String.format("Reactions for post %s deleted", postId);
    }
}
