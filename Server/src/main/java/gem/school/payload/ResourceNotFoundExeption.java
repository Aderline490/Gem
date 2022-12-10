package gem.school.payload;

import lombok.*;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@Getter
@Setter
@ResponseStatus(HttpStatus.NOT_FOUND)
public class ResourceNotFoundExeption extends RuntimeException {
private String resourceName;
private String fieldName;
private String fieldValue;

    public ResourceNotFoundExeption(String resourceName, String fieldName, String fieldValue) {
        super(String.format("%s with %s ['%s'] not found", resourceName, fieldName, fieldValue));
        this.resourceName = resourceName;
        this.fieldName = fieldName;
        this.fieldValue = fieldValue;
    }
}
