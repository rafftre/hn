package it.rafftre.hackernoon;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

/**
 * @author Raffaele Tretola (raffaele.tretola@clubtech.it)
 */
@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class ReactionsNotFoundException extends RuntimeException {

    public ReactionsNotFoundException(String postId) {
        super("Cannot find reactions for post " + postId);
    }
}
