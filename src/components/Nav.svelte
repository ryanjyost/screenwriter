<script>
	export let segment;
</script>

<nav>
	<ul>
		<li>
			<a aria-current={segment === undefined ? 'page' : undefined} href="."
				>home</a
			>
		</li>
		<li>
			<a aria-current={segment === 'about' ? 'page' : undefined} href="about"
				>about</a
			>
		</li>

		<!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen -->
		<li>
			<a
				rel="prefetch"
				aria-current={segment === 'blog' ? 'page' : undefined}
				href="blog">blog</a
			>
		</li>
	</ul>
</nav>

<style>
	nav {
		font-weight: 300;
		opacity: 0;
		height: 0px;
	}

	ul {
		margin: 0;
		padding: 0;
	}

	/* clearfix */
	ul::after {
		content: '';
		display: block;
		clear: both;
	}

	li {
		display: block;
		float: left;
	}
</style>
