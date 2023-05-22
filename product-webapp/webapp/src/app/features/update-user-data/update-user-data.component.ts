import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { UserObj } from "src/app/modals/userObj";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-update-user-data",
  templateUrl: "./update-user-data.component.html",
  styleUrls: ["./update-user-data.component.css"],
})
export class UpdateUserDataComponent implements OnInit {
  constructor(private userService: UserService, private fb: FormBuilder) {}

  user: UserObj = {};

  ngOnInit(): void {
    this.userService.user$.subscribe((user) => {
      console.log(user);
      this.user = user;
      this.initializeForm();
  
      
    });
  }

  addressForm: FormGroup = this.fb.group({});

  initializeForm(): void {
    this.addressForm = this.fb.group({
      image: [this.user.image, Validators.required],
      firstName: [this.user.firstName, Validators.required],
      lastName: [this.user.lastName, Validators.required],
      email:[this.user.email],
      phoneNumber: [this.user.phoneNumber, Validators.required],
      address: [this.user.address, Validators.required],
      city: [this.user.city, Validators.required],
      state: [this.user.state, Validators.required],
      pinCode: [
        this.user.pinCode,
        Validators.compose([
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(5),
        ]),
      ],
      gender: [this.user.gender, Validators.required],
    });
  }
 
  hasUnitNumber = false;
  imageUrl: string;

  handleFileInput(event: any) {
    const file: File = event.target.files[0];
    console.log(file);
    this.imageUrl = URL.createObjectURL(file);
    console.log(this.imageUrl);
    
    
  }

  states = [
    { name: "Andhra Pradesh" },
    { name: "Arunachal Pradesh" },
    { name: "Assam" },
    { name: "Bihar" },
    { name: "Chataftisgarh" },
    { name: "Goa" },
    { name: "Gujarat" },
    { name: "Haryana" },
    { name: "Himachal Pradesh" },
    { name: "Karnataka" },
    { name: "Kerala" },
    { name: "Madhya Pradesh" },
    { name: "Maharastra" },
    { name: "Manipur" },
    { name: "Meghalaya" },
    { name: "Odisha" },
    { name: "Nagaland" },
    { name: "Punjab" },
    { name: "Rajasthan" },
    { name: "Sikkim" },
    { name: "Tamil Nadu" },
    { name: "Telangana" },
    { name: "Uttarakand" },
    { name: "Uttar Pradesh" },
    { name: "West Bengal" },
  ];

  onSubmit(): void {
    console.log(this.states);
    this.handleFileInput(this.addressForm.value.image)
    console.log("inside update component", this.addressForm.value);
    this.userService.updateUser(this.addressForm.value);
  }
}
