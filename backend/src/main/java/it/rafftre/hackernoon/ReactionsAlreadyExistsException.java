package it.rafftre.hackernoon;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

/**
 * @author Raffaele Tretola (raffaele.tretola@clubtech.it)
 */
@ResponseStatus(value = HttpStatus.CONFLICT)
public class ReactionsAlreadyExistsException extends RuntimeException {

    public ReactionsAlreadyExistsException() {
        super("A resource with the same id already exists");
    }
}
