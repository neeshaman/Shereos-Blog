<template>
    <header  id="myHeader">
		<section class="logo">
			<h1 class="logo-text"><span>Shereos</span>Blog</h1>
		</section>
		<i class="fa fa-bars menu-toggle"></i>
		<ul class="nav">
			<li><router-link to="/">Home</router-link></li>
			<li><router-link to="/Login">Login</router-link></li>
			<li><router-link to="/Register">Register</router-link></li>
			<li>
				<a href="#" title="">
					<i class="fa fa-user"></i>
						Shereos Blog
					<i class="fa fa-chevron-down" style="font-size: .8em;"></i>
				</a>
				<ul>
					<li><a href="#" class="logout">Logout</a></li>
				</ul>
			</li>
		</ul>
</header>
</template>
<script>

export default {
  name: 'Header',
 
}
</script>
<style>
</style>
