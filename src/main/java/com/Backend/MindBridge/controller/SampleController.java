package com.Backend.MindBridge.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class SampleController {
    @GetMapping("/action1")
    public String action1() {
        return "버튼 1 눌림";
    }

    @GetMapping("/action2")
    public String action2() {
        return "버튼 2 눌림";
    }

    @GetMapping("/action3")
    public String action3() {
        return "버튼 3 눌림";
    }
}
