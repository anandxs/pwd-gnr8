function isLoggedIn() {
	const tokens = localStorage.getItem("auth");
	return tokens !== null;
}

export { isLoggedIn };
