"use client"

import React, { useState } from "react";
import styles from "@/app/styles/form.module.css";
import InputField from "@/app/components/input/InputField";

interface FormData {
  name: string;
  email: string;
  gender: string;
  password: string;
}

const LoginSignupForm = () => {
  const [isLogin, setIsLogin] = useState<boolean>(true);

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    gender: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(isLogin ? "Login Data" : "Signup Data", formData);
  };

  return (
    <div className={styles.container}>
      <div className={styles.formBox}>
        <div className={styles.topButtons}>
          <button
            onClick={() => setIsLogin(true)}
            className={`${styles.toggleBtn} ${isLogin ? styles.active : ""}`}
          >
            LOGIN
          </button>
          <button
            className={`${styles.toggleBtn} ${!isLogin ? styles.active : ""}`}
            onClick={() => setIsLogin(false)}
          >
            SIGNUP
          </button>
        </div>
        <form 
          className={styles.form} 
          onSubmit={handleSubmit}
        >
          {!isLogin && (
            <InputField
              type="text"
              name="name"
              label="NAME"
              value={formData.name}
              onChange={handleChange}
            />
          )}
          <InputField
            type="email"
            name="email"
            label="EMAIL"
            value={formData.email}
            onChange={handleChange}
          />
          <InputField
            type="password"
            name="password"
            label="PASSWORD"
            onChange={handleChange}
            value={formData.password}
          />
          {!isLogin && (
            <div className={styles.genderBox}>
              <label className={styles.label}>GENDER</label>
              <div className={styles.radioGroup}>
                <label>
                  <input
                    type="radio"
                    value="MALE"
                    name="gender"
                    onChange={handleChange}
                    checked={formData.gender === "MALE"}
                  />
                  MALE
                </label>
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="FEMALE"
                    onChange={handleChange}
                    checked={formData.gender === "FEMALE"}
                  />
                  FEMALE
                </label>
              </div>
            </div>
          )}
          <button type="submit" className={styles.submitBtn}>
            {isLogin ? "LOGIN" : "SIGNUP"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginSignupForm;
