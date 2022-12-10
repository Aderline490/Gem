package gem.school.models;

import com.fasterxml.jackson.annotation.JsonFormat;
import gem.school.dtos.CreateStudentDTO;
import gem.school.enums.EGender;


import lombok.*;

import javax.persistence.*;
import java.util.UUID;
import java.time.LocalDate;


@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "students")
public class Student {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private UUID id;
    @Column(name = "first_name")
    private String firstName;
    @Column(name = "last_name")
    private String lastName;

    @Column(name = "gender")
    private String gender;
    @Column(name = "class_year")
    private Integer classYear;
    @JsonFormat(pattern = "yyyy-MM-dd")
    @Column(name = "date_of_birth")
    private LocalDate dateOfBirth;

    public Student(CreateStudentDTO dto) {
//        this.id = dto.getId();
        this.classYear = dto.getClassYear();
        this.dateOfBirth = dto.getDateOfBirth();
        this.gender = dto.getGender();
        this.firstName = dto.getFirstName();
        this.lastName = dto.getLastName();
    }

    public Student(String firstName, String lastName, String gender, Integer classYear, LocalDate dateOfBirth) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.classYear = classYear;
        this.dateOfBirth = dateOfBirth;
    }

    public UUID getId() {
        return id;
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

    public Integer getClassYear() {
        return classYear;
    }

    public LocalDate getDateOfBirth() {
        return dateOfBirth;
    }

    public void setId(UUID id) {
        this.id = id;
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

    public void setClassYear(Integer classYear) {
        this.classYear = classYear;
    }

    public void setDateOfBirth(LocalDate dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }
}
