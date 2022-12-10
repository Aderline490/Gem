package gem.school.serviceImpls;


import gem.school.dtos.CreateStudentDTO;
import gem.school.models.Student;
import gem.school.payload.ResourceNotFoundExeption;
import gem.school.repositories.IStudentRepository;
import gem.school.services.IStudentService;
import javassist.tools.web.BadHttpRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.ResourceAccessException;



import java.util.List;
import java.util.UUID;


@Service
public class StudentServiceImpl implements IStudentService {

    private final IStudentRepository studentRepository;

    @Autowired
    public StudentServiceImpl(IStudentRepository studentRepository) {
        this.studentRepository = studentRepository;
    }

    @Override
    public Student create(CreateStudentDTO dto) {
        Student student = new Student(dto);
        Student savedStudent = studentRepository.save(student);
        return savedStudent;
    }

    @Override
    public List<Student> findAll() {
        return studentRepository.findAll();
    }

    @Override
    public Student findById(UUID id) {
        return studentRepository.findById(id).orElseThrow(() -> new ResourceNotFoundExeption("Student ", " id", id.toString()));
    }

    @Override
    public boolean existsById(UUID id) {
        return studentRepository.existsById(id);
    }

    @Override
    public Student update(UUID id, CreateStudentDTO studentDTO) {

        Student student = findById(id);
        if (existsById(studentDTO.getId()) && (!student.getId().equals(studentDTO.getId()))) {
            throw new RuntimeException(String.format("Student with id %s already exists", studentDTO.getId()));
        }
        student.setFirstName(studentDTO.getFirstName());
        student.setLastName(studentDTO.getLastName());
        student.setGender(studentDTO.getGender());
        student.setClassYear(studentDTO.getClassYear());
        student.setDateOfBirth(studentDTO.getDateOfBirth());
        student =studentRepository.save(student);
        return student;
    }

    @Override
    public boolean delete(UUID id) {
        if(existsById(id)) {
            studentRepository.deleteById(id);
            return true;
        }
        throw new ResourceNotFoundExeption("Student", "id", id.toString());
    }

    @Override
    public Integer countAll() {
        return null;
    }
}
