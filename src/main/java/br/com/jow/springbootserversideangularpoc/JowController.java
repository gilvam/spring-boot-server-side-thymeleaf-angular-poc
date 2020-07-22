package br.com.jow.springbootserversideangularpoc;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class JowController {

	@GetMapping("/rest/jow")
	public String getJow() {
		return "JOW";
	}

	@GetMapping(value = "/rest/json")
	public String getJow2() {
		return "{user: 'haha'}";
	}

}
