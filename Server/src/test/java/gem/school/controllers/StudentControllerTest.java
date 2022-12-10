package gem.school.controllers;

import gem.school.dtos.CreateStudentDTO;
import gem.school.enums.EGender;
import gem.school.models.Student;
import gem.school.serviceImpls.StudentServiceImpl;
import org.apache.catalina.security.SecurityConfig;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.context.annotation.Import;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.mock.web.MockHttpServletRequest;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockHttpServletRequestDsl;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MockMvcBuilder;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.request.MockHttpServletRequestBuilder;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.mock;
import static org.springframework.http.HttpStatus.CREATED;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import static org.mockito.Mockito.when;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.Arrays;
import java.util.List;
import java.util.UUID;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

@RunWith(SpringRunner.class)
@WebMvcTest(StudentController.class)
@EnableWebMvc
@ContextConfiguration
@Import(SecurityConfig.class)
public class StudentControllerTest {
    @MockBean
    private StudentServiceImpl studentServiceMock;

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private ObjectMapper mapper;

    String str = "2004-10-17";
    DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
    LocalDate date = LocalDate.parse(str, formatter);

    @Test
    public void findAll_Success() throws Exception {
        List<Student> asList = Arrays.asList(new Student(UUID.randomUUID(), "aderline", "gashugi", EGender.FEMALE, 5, date));
        when(studentServiceMock.findAll()).thenReturn(asList);

        MockHttpServletRequestBuilder request = MockMvcRequestBuilders
                .get("/students/all")
                .accept(MediaType.APPLICATION_JSON);
        mockMvc
                .perform(request)
                .andExpect(status().isOk())
                .andReturn();
    }

    @Test
    public void create_success() throws Exception {
        CreateStudentDTO studentDTO = new CreateStudentDTO("bizy", "gashugi", EGender.FEMALE, date, 5);
        when(studentServiceMock.create(studentDTO)).thenReturn(null);
        MockHttpServletRequestBuilder request = MockMvcRequestBuilders
                .post("/students")
                .content(mapper.writeValueAsString(studentDTO))
                .contentType(MediaType.APPLICATION_JSON);
        mockMvc.perform(request).andExpect(status().isOk()).andReturn();
    }

    @Test
    public void update_success() throws Exception {
        Student student = new Student("aderline", "gashugi", EGender.FEMALE, 5, date);
        ResponseEntity.status(CREATED).body(student);
        ResponseEntity<?> response = ResponseEntity.status(CREATED).body(student);
        when(studentServiceMock.update(UUID.fromString("74cba2dd-58d8-4f6e-bd0d-401623874142"), new CreateStudentDTO("aderline", "gashugi", EGender.FEMALE, date, 5))).thenReturn(null);

        MockHttpServletRequestBuilder request = MockMvcRequestBuilders
                .put("/students/74cba2dd-58d8-4f6e-bd0d-401623874142")
                .content(mapper.writeValueAsString(student))
                .contentType(MediaType.APPLICATION_JSON);
        mockMvc
                .perform(request)
                .andExpect(status().isOk())
                .andReturn();

    }

    @Test
    public void delete_success() throws Exception {
        when(studentServiceMock.delete(UUID.fromString("32f1224c-ec76-4c91-90d5-8579ffe2bfc9"))).thenReturn(true);

        MockHttpServletRequestBuilder request = MockMvcRequestBuilders.delete("/students/32f1224c-ec76-4c91-90d5-8579ffe2bfc9");

        mockMvc.perform(request).andDo(print()).andExpect(status().isOk()).andReturn();
    }

}
