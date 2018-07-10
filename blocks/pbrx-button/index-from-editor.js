{
	key: "render",
	value: function() {
		var e = this,
		t = this.props,
		n = t.value,
		r = void 0 === n ? "" : n,
		o = t.autoFocus,
		i = void 0 === o || o,
		s = t.instanceId,
		c = this.state,
		a = c.showSuggestions,
		l = c.posts,
		u = c.selectedSuggestion,
		d = c.loading;
		return Object(X.createElement)(X.Fragment, null, Object(X.createElement)("div", {
			className: "editor-url-input"
		}, Object(X.createElement)("input", {
			autoFocus: i,
			type: "text",
			"aria-label": Object(P.__)("URL"),
			required: !0,
			value: r,
			onChange: this.onChange,
			onInput: ps,
			placeholder: Object(P.__)("Paste URL or type"),
			onKeyDown: this.onKeyDown,
			role: "combobox",
			"aria-expanded": a,
			"aria-autocomplete": "list",
			"aria-owns": "editor-url-input-suggestions-" + s,
			"aria-activedescendant": null !== u ? "editor-url-input-suggestion-" + s + "-" + u : void 0
		}), d && Object(X.createElement)(or.Spinner, null)), a && !!l.length && Object(X.createElement)(or.Popover, {
			position: "bottom",
			noArrow: !0,
			focusOnMount: !1
		}, Object(X.createElement)("div", {
			className: "editor-url-input__suggestions",
			id: "editor-url-input-suggestions-" + s,
			ref: this.bindListNode,
			role: "listbox"
		}, l.map(function(t, n) {
			return Object(X.createElement)("button", {
				key: t.id,
				role: "option",
				tabIndex: "-1",
				id: "editor-url-input-suggestion-" + s + "-" + n,
				ref: e.bindSuggestionNode(n),
				className: fr()("editor-url-input__suggestion", {
					"is-selected": n === u
				}),
				onClick: function() {
					return e.selectLink(t.link)
				},
				"aria-selected": n === u
			}, Object(Ui.decodeEntities)(t.title.rendered) || Object(P.__)("(no title)"))
		}))))
	}
}]),