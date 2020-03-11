import React from "react";

import Logo from "./Logo";

export default _ => (
	<>
		<p>
			&copy; <Logo /> {new Date().getFullYear()}.
		</p>
	</>
);
