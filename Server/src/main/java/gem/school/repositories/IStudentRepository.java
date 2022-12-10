package gem.school.repositories;

import gem.school.models.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface IStudentRepository extends JpaRepository<Student, UUID> {
    boolean existsById(String id);
}
