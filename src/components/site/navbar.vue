<template>
	<section class="menu">
		<a class="logo" href="/">Mascarenhas</a>
		<span class="mobile-btn"></span>
		
	    <nav class="menu-nav mobile-menu">
			<ul>
				<li >
					<router-link to="/Home" class="nav-link">Home</router-link>
				</li>

				<li>
					<router-link to="/Eventos" class="nav-link">Eventos</router-link>
				</li>

				<li>
					<router-link to="/App" class="nav-link">App</router-link>
				</li>
			</ul>
		</nav>
	</section>
</template>

<script>
    export default {}
</script>

<style scoped>
.menu {
	background: #56CC9D;
	position: fixed;
	width: 100%;
	top: 0;
	z-index: 100;
}

.menu nav {
	text-align: right;
	padding: 10px 20px 0 0;
}

.menu nav ul {
	padding: 0px;
	margin: 0px;
}

.menu nav li {
	display: inline-block;
	text-align: right;
}

.menu nav li a {
	display: block;
	color: white;
	padding: 15px 20px;
	text-decoration: none;
	font-family: monospace;
	text-transform: uppercase;
	font-size: 1.3em;
	letter-spacing: 2px;
	float: left;
}

.menu nav li a::after {
	content: '';
	display: block;
	background: white;
	height: 2px;
	width: 0;
	transition: .3s;
}

.menu nav li a:hover::after, .menu nav li a.active::after {
	width: 100%;
}

.logo {
	display: block;
	color: white;
	width: 200px;
	padding: 10px 10px 14px 20px;
	text-decoration: none;
	font-family: 'Playfair Display';
	text-transform: uppercase;
	letter-spacing: 5px;
	font-size: 2em;
	float: left;
}

@media only screen and (max-width: 768px) {

	.mobile-btn {
		display: block;
		color: white;
		width: 36px;
		height: 36px;
		border-top: 4px solid;
		margin: 20px 20px 0 0;
		float: right;
		position: relative;
		cursor: pointer;
		-webkit-backface-visibility: hidden;
	}

	.mobile-btn::after, .mobile-btn::before {
		content: '';
		display: block;
		height: 4px;
		margin-top: 6px;
		background: currentColor;
		position: relative;
		transition: transform .2s ease;
	}

	.mobile-btn.active {
		border-top-color: transparent;
	}

	.mobile-btn.active::after {
		margin-top: 0px;
		top: 2px;
		transform: rotate(45deg);
	}

	.mobile-btn.active::before {
		margin-top: 0px;
		top: 6px;
		transform: rotate(135deg);
	}

	.menu-nav.mobile-menu {
		position: fixed;
		background: #56CC9D;
		padding: 10px;
		top: 60px;
		right: 0px;
		opacity: 0;
		visibility: hidden;
		transform: translate3d(60px, 0px, 0px);
		transition: .3s;
	}

	.menu-nav.mobile-menu.active {
		opacity: 1;
		visibility: visible;
		transform: translate3d(0px, 0px, 0px);
	}

	.menu-nav.mobile-menu li {
		display: block;
	}

	.menu-nav.mobile-menu li a {
		border-top: 2px solid;
		width: 100%;
		text-align: center;
	}
	
}
</style>
