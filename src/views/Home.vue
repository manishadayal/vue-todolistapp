<template>
    <div>
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header"><h4>Login</h4></div>
                    <div class="card-body">
                    <form @submit.prevent="login">
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
                        <button class="btn waves-effect waves-light" type="submit" name="action">Login
    <i class="material-icons right">lock</i></button>
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
  name: "Home",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          alert("Successfully logged in");
          this.$router.push("/dashboard");
        })
        .catch((error) => {
          alert(error.message);
        });
    },
  },
};
</script>