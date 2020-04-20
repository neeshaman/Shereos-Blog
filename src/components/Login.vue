<template>
    <div class="auth-content">
    <form >
        <h2 class="form-title">Login</h2>
        <div>
            <label >Username</label>
            <input type="text" name="username"  class="text-input">
        </div>
        <div>
            <label >Password</label>
            <input type="password" name="password"  class="text-input">
        </div>
        <div>

            <button type="submit" name="login-btn" class="btn btn-big">Login</button>
        </div>
      <p>Or <router-link to="/Register">Sign Up</router-link></p>  
    </form>
</div>
</template>
<script>
export default {
  name: 'Login',
}
</script>
<style>
</style>
