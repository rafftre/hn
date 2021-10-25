package it.rafftre.hackernoon;

import lombok.*;
import org.hibernate.Hibernate;
import org.hibernate.validator.constraints.Length;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import java.io.Serializable;
import java.util.Objects;

/**
 * @author Raffaele Tretola (raffaele.tretola@clubtech.it)
 */
@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "reactions")
public class Reactions implements Serializable {

    private static final long serialVersionUID = -7604242267785664984L;

    @Id
    @NotBlank
    @Length(max = 32)
    @Column(name = "post_id")
    private String postId;
    @Min(0)
    private int light;
    @Min(0)
    private int boat;
    @Min(0)
    private int heart;
    @Min(0)
    private int money;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || Hibernate.getClass(this) != Hibernate.getClass(o)) return false;
        Reactions reactions = (Reactions) o;
        return postId != null && Objects.equals(postId, reactions.postId);
    }

    @Override
    public int hashCode() {
        return getClass().hashCode();
    }
}
