package gem.school.controllers;

import gem.school.dtos.CreateStudentDTO;
import gem.school.payload.ApiResponse;
import gem.school.services.IStudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.UUID;

@RestController
@RequestMapping("/students")
public class StudentController {
    private final IStudentService studentService;

    @Autowired
    public StudentController(IStudentService studentService) {
        this.studentService = studentService;
    }

    @GetMapping(path = "/all")
    public ResponseEntity<ApiResponse> getAll() {
        return ResponseEntity.ok(ApiResponse.success(this.studentService.findAll()));
    }

    @PostMapping
    public ResponseEntity<ApiResponse> create(@Valid @RequestBody CreateStudentDTO dto) {
        return ResponseEntity.ok(ApiResponse.success(this.studentService.create(dto)));
    }

    @PutMapping("/{id}")
    public ResponseEntity<ApiResponse> updateStudent(@PathVariable UUID id, @Valid @RequestBody CreateStudentDTO dto) {
        try {
            return ResponseEntity.ok(ApiResponse.success(this.studentService.update(id, dto)));
        }
        catch(Exception e) {
            e.printStackTrace();
            return ResponseEntity.ok(ApiResponse.fail(e.toString()));
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<ApiResponse> deleteStudent(@PathVariable(value = "id") UUID id) {
        try {
            return ResponseEntity.ok(ApiResponse.success(this.studentService.delete(id)));
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.ok(ApiResponse.fail(e.toString()));
        }
    }
}
