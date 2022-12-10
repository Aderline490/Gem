package gem.school.services;


import gem.school.dtos.CreateStudentDTO;
import gem.school.models.Student;

import java.util.List;
import java.util.UUID;

public interface IStudentService {

    Student create(CreateStudentDTO studentDTO);

    Student findById(UUID id);

    boolean existsById(UUID id);

    List<Student> findAll();

    Student update(UUID studentId, CreateStudentDTO dto);

    boolean delete(UUID id);

    Integer countAll();

}
