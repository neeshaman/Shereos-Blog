<template>
    <div class="footer">
	<div class="footer-content">
		<div class="footer-section about">
			<h1 class="logo.txt">
				<span>Shereos</span>Blog
			</h1>
			<p>
				Sheroes Blog is a bloging website for the purpose 
				of letting the acid attacked victims to come forth and write some 
				inspiring stuff.

			</p>
			<div class="contact">
				<span><i class="fas fa-phone"></i> &nbsp;0191-2591624</span>
				<span><i class="fas fa-envelope"></i> &nbsp;sheroblog@gmail.com</span>
			</div>
			<div class="socials">
				<a href="#"><i class="fab fa-facebook"></i></a>
				<a href="#"><i class="fab fa-instagram"></i></a>
				<a href="#"><i class="fab fa-twitter"></i></a>
				<a href="#"><i class="fab fa-youtube"></i></a>
			</div>
		</div>
		<div class="footer-section links">
			<h2>Quick Links</h2>
			<br>
			<ul>
				<li><a href="#">Gallery</a></li>
				<li><a href="#">Terms and Conditions</a></li>
			</ul>
		</div>
		<div class="footer-section contact-form">
			<h2>Contact Us</h2>
			<form action="index.html" method="post">
				<input type="email" name="email" class="text-input contact-input" placeholder="Your email address...">
				<textarea rows="4" name="message" class="text-input contact-input" placeholder="Your mesaage...."></textarea>
				<button type="submit" class="btn btn-big contact-btn"><i class="fas fa-envelope"></i> Send</button>
				
			</form>
		</div>

	</div>
	<div class="footer-bottom">
		&copy; sheroesblog.com | Designed by Sangeeta and Neesha
	</div>
</div>
</template>
<script>

export default {
  name: 'Footer',
 
}
</script>
<style>
</style>