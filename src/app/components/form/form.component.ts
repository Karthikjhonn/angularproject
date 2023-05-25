import { Component } from '@angular/core';
import { FormControl, FormGroup, MinLengthValidator, MinValidator, Validators } from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent {



  Login = new FormGroup({
    Email: new FormControl("", Validators.required),
    Password: new FormControl("", Validators.required ),
    correctPassword: new FormControl("", Validators.required),
    termsandcondition: new FormControl("", Validators.required)
  })

  
  getData() {
    console.log(this.Login.value);
    console.log(this.Login.value);
    alert(JSON.stringify(this.Login.value))
    this.clearFormData()
  }
  clearFormData() {
    this.Login.reset()
  }
  

  // login form
  isLogedin: boolean = true
  formTitle = "Sign Up"
  loginText = "Login Here"
  loginMessage = "Do you have already account?"
  formTitleChange() {
    if (this.isLogedin == false) {
      this.formTitle = "Login"
    } else if (this.isLogedin == true) {
      this.formTitle = "sign Up"
    }
  }
  loginTextChange() {
    if (this.isLogedin == true) {
      this.loginText = "Login Here"
      this.btnText="Sign up"
    } else if (this.isLogedin == false) {
      this.loginText = "Sign Up First"
      this.btnText="Login"
    }
  }
  loginMessageChange() {
    if (this.isLogedin == true) {
      this.loginMessage = "Do you have already account?"
    } else if (this.isLogedin == false) {
      this.loginMessage = "Don't have a account?"
    }
  }

  // FormChange
  LoginFormChange(){
    if(!this.isLogedin){
      this.Login = new FormGroup({
        Email: new FormControl("", Validators.required),
        Password: new FormControl("", Validators.required),
        correctPassword: new FormControl({value: '', disabled: true},),
        termsandcondition: new FormControl({value:'', disabled: true}, Validators.required)
      })
    }
  }
  signupFormChange(){
    if(this.isLogedin){
      this.Login = new FormGroup({
        Email: new FormControl("", Validators.required),
        Password: new FormControl("", Validators.required),
        correctPassword: new FormControl("", Validators.required),
        termsandcondition: new FormControl("", Validators.required)
      })
    }
  }

  LoginBtn(){
    if(!this.isLogedin){  
    if (this.Login.controls.Email.valid && this.Login.controls.Password.valid) {
      this.disableBtn = false
    } else {
      this.disableBtn = true
    }
  }
  }
  isLogin() {
    if (this.isLogedin == true) {
      this.isLogedin = false
      this.LoginFormChange()
    } else if (this.isLogedin == false) {
      this.isLogedin = true
      this.signupFormChange()
    }
    this.formTitleChange()
    this.loginTextChange()
    this.loginMessageChange()
    this.LoginBtn()
   
  }


  // buttonDisable
  disableBtn: Boolean = true
  btnText="Sign up"
  ngDoCheck(){
    if (this.Login.controls.Email.valid && this.Login.controls.Password.valid && this.Login.controls.correctPassword.valid && this.Login.controls.termsandcondition.valid) {
      this.disableBtn = false
    } else {
      this.disableBtn = true
    }
    this.checkPassword()
    this.LoginBtn()
  }

  checkPassword() {
    if (this.Login.controls.Password.value != this.Login.controls.correctPassword.value) {
      this.disableBtn = true
    }
  }


}
