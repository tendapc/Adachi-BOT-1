const template =
`<div class="character-item">
	<img class="background" :src="starBackground" alt="ERROR"/>
	<img class="main" :src="char.icon" alt="ERROR"/>
	<div class="corner"></div>
	<span class="level">{{ str }}</span>
</div>`;

import Vue from "../../public/js/vue.js";

export default Vue.defineComponent( {
	name: "CharacterItem",
	template,
	props: {
		char: Object,
		str: String
	},
	setup( props ) {
		const starBackground = Vue.computed( () => {
			let star = props.char.rarity;
			/* for Aloy */
			if ( props.char.rarity === 105 ) {
				star = 5;
			}
			return `/public/images/rarity/${ star }-star.png`;
		} );
		
		return {
			starBackground
		}
	}
} );