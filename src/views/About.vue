<template>
    <div>
        <div class="row justify-content-center">
            <div class="col-md-4">
                <div class="card">
                    <div class="card-header"><h4>Register</h4></div>
                    <div class="card-body">
                        <form @submit.prevent="register">
                            <input
                                type="email"
                                placeholder="Email address..."
                                v-model="email"
                            />
                            <input
                                type="password"
                                placeholder="password..."
                                v-model="password"
                            />
                            <button class="btn waves-effect waves-light" type="submit" name="action">Register
    <i class="material-icons right">send</i></button>
                        </form>
                    </div>
                </div>
            </div>
        </div> 
    </div>
</template>
<script>
import firebase from "firebase";
export default {
  name: "Register",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    register() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(() => {
          alert("Successfully registered! Please login.");
          this.$router.push("/");
        })
        .catch((error) => {
          alert(error.message);
        });
    },
  },
};
</script>