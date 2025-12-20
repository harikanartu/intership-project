package com.lms.backend.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.List;

@Configuration
public class SecurityConfig {

        @Bean
        public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {

                http
                                // ✅ ENABLE CORS (MANDATORY)
                                .cors(cors -> cors.configurationSource(corsConfigurationSource()))

                                // ✅ DISABLE CSRF (required for REST + Swagger)
                                .csrf(csrf -> csrf.disable())

                                // ✅ DISABLE DEFAULT LOGIN FORMS
                                .formLogin(form -> form.disable())
                                .httpBasic(basic -> basic.disable())

                                // ✅ AUTHORIZE REQUESTS
                                .authorizeHttpRequests(auth -> auth
                                                // Auth APIs
                                                .requestMatchers("/api/auth/**").permitAll()

                                                // Swagger
                                                .requestMatchers(
                                                                "/swagger-ui/**",
                                                                "/swagger-ui.html",
                                                                "/v3/api-docs/**")
                                                .permitAll()

                                                // TEMP: allow everything else
                                                .anyRequest().permitAll());

                return http.build();
        }

        // ✅ CORRECT CORS CONFIGURATION
        @Bean
        public CorsConfigurationSource corsConfigurationSource() {

                CorsConfiguration config = new CorsConfiguration();

                // IMPORTANT: credentials + explicit origin
                config.setAllowCredentials(true);

                // ✅ DO NOT USE allowedOrigins("*")
                config.setAllowedOriginPatterns(List.of(
                                "http://localhost:5173"));

                config.setAllowedMethods(List.of(
                                "GET", "POST", "PUT", "DELETE", "OPTIONS"));

                config.setAllowedHeaders(List.of("*"));

                UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();

                source.registerCorsConfiguration("/**", config);
                return source;
        }
}