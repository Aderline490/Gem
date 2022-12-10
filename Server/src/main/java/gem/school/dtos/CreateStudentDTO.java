package gem.school.dtos;

import com.fasterxml.jackson.annotation.JsonFormat;
import gem.school.enums.EGender;
import lombok.*;
import java.time.LocalDate;
import java.util.UUID;
import javax.validation.constraints.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class CreateStudentDTO {

    private UUID id;
    @NotBlank
    private String firstName;
    @NotBlank
    private String lastName;
    @NotNull
    private String gender;
    @NotNull
    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDate dateOfBirth;

    @Max(6)
    @Min(1)
    private Integer classYear;

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

        public CreateStudentDTO(@NotBlank String firstName, @NotBlank String lastName, @NotNull String gender, @NotNull LocalDate dateOfBirth, @Max(6) @Min(1) Integer classYear) {
        super();
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.dateOfBirth = dateOfBirth;
        this.classYear = classYear;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public String getGender() {
        return gender;
    }

    public LocalDate getDateOfBirth() {
        return dateOfBirth;
    }

    public Integer getClassYear() {
        return classYear;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public void setDateOfBirth(LocalDate dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }

    public void setClassYear(Integer classYear) {
        this.classYear = classYear;
    }

    @Override
    public String toString() {
        return "CreateStudentDTO{" +
                "id=" + id +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", gender=" + gender +
                ", dateOfBirth=" + dateOfBirth +
                ", classYear=" + classYear +
                '}';
    }
}
