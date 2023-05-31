import { Component, OnInit, OnDestroy } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Route, Router } from "@angular/router";
import { UserObj } from "src/app/modals/userObj";
import { PopupService } from "src/app/services/popup.service";
import { UserService } from "src/app/services/user.service";
import { distinctUntilChanged } from "rxjs/operators";
import { Subscription } from "rxjs";

@Component({
  selector: "app-update-user-data",
  templateUrl: "./update-user-data.component.html",
  styleUrls: ["./update-user-data.component.css"],
})
export class UpdateUserDataComponent implements OnInit, OnDestroy {
  constructor(
    private userService: UserService,
    private fb: FormBuilder,
    private router: Router,
    private popup: PopupService
  ) {}

  user: UserObj = {};

  // ngOnInit(): void {
  //   this.userService.user$
  //     .pipe(distinctUntilChanged())
  //     .subscribe((user) => {
  //       console.log(user);
  //       this.user = user;
  //       this.initializeForm();
  //     });
  // }

  
  private userSubscription: Subscription;
  formSubmitted = false;

  ngOnInit(): void {
    this.userSubscription = this.userService.user$.pipe(distinctUntilChanged()).subscribe((user) => {
      console.log(user);
      if (!this.formSubmitted) { // Check if form is not submitted
        this.user = user;
        this.initializeForm();
      }
      this.formSubmitted = false; // Reset the flag
    });
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }

  addressForm: FormGroup = this.fb.group({});
  userEmailId: string = "";

  initializeForm(): void {
    this.addressForm = this.fb.group({
      // image: [this.user.image, Validators.required],
      firstName: [this.user.firstName, Validators.required],
      lastName: [this.user.lastName, Validators.required],
      email: [{ value: this.user.email, disabled: true }],
      phoneNumber: [
        this.user.phoneNumber,
        [Validators.required, Validators.maxLength(10)],
      ],
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

  states = [
    { name: "Andhra Pradesh" },
    { name: "Arunachal Pradesh" },
    { name: "Assam" },
    { name: "Bihar" },
    { name: "chhattisgarh" },
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
    console.log("update component", this.addressForm.value);

    this.userService.getUserEmail().subscribe((email) => {
      this.userService.updateUser(this.addressForm.value, email).subscribe(
        () => {
          console.log("User updated successfully");
          this.router.navigate(["/"]);
          this.popup.open("User updated successfully", 2000);
          // this.userService.fetchUser(email);
        },
        (error) => {
          console.error("Error updating user:", error);
          this.popup.open("Error updating user", 2000);
        }
      );
    });
  }

  // onSubmit(): void {
  //   console.log("update component", this.addressForm.value);

  //   this.userService.getUserEmail().subscribe((email) => {
  //     this.userService.updateUser(this.addressForm.value, email).subscribe(
  //       () => {
  //         this.popup.open("User details updated!", 2000);
  //         // this.userService.fetchUser(email);
  //         this.router.navigate(['/']);
  //       },
  //       () => {
  //         this.popup.open("Error updating details!", 2000);
  //         // this.router.navigate(['/']);
  //       }
  //     );
  //   });

  // }
}
