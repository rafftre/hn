package it.rafftre.hackernoon;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.web.cors.CorsConfiguration;

import javax.servlet.*;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Arrays;
import java.util.List;

/**
 * @author Raffaele Tretola (raffaele.tretola@clubtech.it)
 */
@EnableWebSecurity
@Configuration
public class WebSecurityConfiguration extends WebSecurityConfigurerAdapter {

    @Value("${app.cors.allowed-methods}")
    private List<String> allowedMethods;

    @Value("${app.cors.allowed-origins}")
    private List<String> allowedOrigins;

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        CorsConfiguration corsConfig = new CorsConfiguration().applyPermitDefaultValues();
        corsConfig.setAllowCredentials(true);
        corsConfig.setAllowedMethods(Arrays.asList("GET", "HEAD", "POST", "PUT", "DELETE", "OPTIONS"));
        corsConfig.setAllowedOrigins(allowedOrigins);

        Filter headerFilter = new Filter() {
            @Override
            public void doFilter(ServletRequest req, ServletResponse res, FilterChain chain) throws IOException, ServletException {
                HttpServletResponse httpRes = (HttpServletResponse) res;
                httpRes.setHeader(
                        "custom-header1", "header-value1");
                httpRes.setHeader(
                        "custom-header2", "header-value2");
                chain.doFilter(req, res);
            }
        };

        http
                .authorizeRequests().antMatchers("/**").permitAll()
                .and()
                .cors().configurationSource(request -> corsConfig)
                .and()
                .csrf().disable();
    }
}
