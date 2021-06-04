<template>
  <div id="login">
    <v-card id="login-form">
      <v-card-title>Login</v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field
            v-model="username"
            :error-messages="usernameErrors"
            label="Username"
            required
            @input="$v.username.$touch()"
            @blur="$v.username.$touch()"
            prepend-icon="mdi-user"
          />
          <v-text-field
            v-model="password"
            :type="showPassword ? 'text' : 'password'"
            :error-messages="passwordErrors"
            label="Password"
            required
            @input="$v.password.$touch()"
            @blur="$v.password.$touch()"
            prepend-icon="mdi-lock"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="showPassword = !showPassword"
          />
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-btn @click="login" color="blue">Login</v-btn>
      </v-card-actions>
    </v-card>
    <v-snackbar
      v-model="snackbar"
      :bottom="snackbarY === 'bottom'"
      :color="snackbarColor"
      :left="snackbarX === 'left'"
      :multi-line="snackbarMode === 'multi-line'"
      :right="snackbarX === 'right'"
      :timeout="snackbarTimeout"
      :top="snackbarY === 'top'"
      :vertical="snackbarMode === 'vertical'"
    >
      {{ snackbarText }}
      <template v-slot:action="{ attrs }">
        <v-btn dark text v-bind="attrs" @click="snackbar = false">Close</v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required } from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],
  validations: {
    username: { required },
    password: { required },
  },
  data() {
    return {
      username: "",
      password: "",

      status: null,
      showPassword: false,

      snackbarColor: "error",
      snackbarMode: "",
      snackbar: false,
      snackbarText: "Invalid credentials!",
      snackbarTimeout: 6000,
      snackbarX: "right",
      snackbarY: "bottom",
    };
  },
  mounted() {
    document.title = "Benthos EPK / Login";
  },
  computed: {
    usernameErrors() {
      const errors = [];
      if (!this.$v.username.$dirty) return errors;
      !this.$v.username.required && errors.push("Username is required.");
      return errors;
    },
    passwordErrors() {
      const errors = [];
      if (!this.$v.password.$dirty) return errors;
      !this.$v.password.required && errors.push("Password is required");
      return errors;
    },
  },
  methods: {
    async login() {
      await this.$store
        .dispatch("login", {
          username: this.username,
          password: this.password,
        })
        .then(() => {
          this.$router.push({ path: "/epk" });
        })
        .catch((err) => {
          console.error(err);
          this.snackbar = true;
        });
    },
  },
};
</script>

<style>
#login {
  width: 100%;
  height: 100vh;
  background-image: url("../assets/epk/background.jpg");
  background-size: cover;

  text-align: center;
  font-family: "Libre Baskerville", serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #efdfba;

  font-size: 18px;
  line-height: 2;
  word-spacing: 8px;

  display: flex;
  justify-content: center;
  align-items: center;
}

#login-form {
  width: 70%;
  padding: 20px;
}
</style>