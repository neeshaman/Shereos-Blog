<template>
<div>
    <div class="auth-content">
    <form action="register.html" method="post">
        <h2 class="form-title">Register</h2>
        <div>
            <label >Username</label>
            <input type="text" name="username"  class="text-input">
        </div>
        <div>
            <label >Email</label>
            <input type="email" name="email"  class="text-input">
        </div>
        <div>
            <label >Password</label>
            <input type="password" name="password"  class="text-input">
        </div>
        <div>
            <label >Password Confirmation</label>
            <input type="password" name="passwordconf"  class="text-input">
        </div>
        <div>

            <button type="submit" class="btn btn-big" name="register-btn">Register</button>
        </div>
      <p>Or <router-link to="/Login">Sign In</router-link></p>  
    </form>
</div>
</div>
</template>
<script>
export default {
  name: 'Register',
}
</script>
<style>
</style>
