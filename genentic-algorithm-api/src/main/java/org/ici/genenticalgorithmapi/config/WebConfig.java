package org.ici.genenticalgorithmapi.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig {

    @Bean
    public WebMvcConfigurer webMvcConfigurer(){
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**") // routes
                        .allowedOrigins("http://localhost:5173") // frontend url
                        .allowedMethods(HttpMethod.GET.name(), HttpMethod.POST.name(), HttpMethod.HEAD.name(), HttpMethod.OPTIONS.name())
                        .allowedHeaders(HttpHeaders.CONTENT_TYPE);
            }
        };
    }

}
