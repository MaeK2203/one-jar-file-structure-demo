package demo.maek.rentalschedulemanagement.controller

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController

@RestController
class TestController {
    @GetMapping("api/test", produces = ["application/json"])
    fun test() = "Controller test"
}