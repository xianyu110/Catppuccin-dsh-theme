// dsh-catppuccin — browser half (client plugin bundle). GENERATED FILE:
// run `node scripts/gen-themes.mjs` to regenerate from lib/client.tpl.js.
//
// Loaded by dsh-client-modules at /plugins/dsh-catppuccin/client.js and
// executed through the vendored cordis Loader's lazy-CJS module table
// (window.__ModuleLoader__.load). The factory body is plain CJS with
// require() resolved against the shell's module table — the same shape the
// shipped ui-* packages' tsdown bundles emit.
window.__ModuleLoader__.load({
	id: "dsh-catppuccin",
	factory: (require) => {
		var module = { exports: {} };
		var exports = module.exports;
		Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
		let react_jsx_runtime = require("react/jsx-runtime");
		let _runtime_client = require("@deepseek-ai/dsh-client-runtime/client");

		//#region dsh-catppuccin: definitions
		/** The settings row's locale namespace. */
		const SETTINGS_NS = "settings.catppuccin";
		/** localStorage key holding the selected theme id. */
		const STORAGE_KEY = "dsh-catppuccin:skin";
		/** Sentinel meaning "no custom theme — follow the built-in appearance". */
		const DEFAULT_SKIN = "system";

		/**
		 * The Catppuccin theme catalog, generated from the official
		 * catppuccin/palette palette.json. Each entry is a third-party theme
		 * for the built-in ThemeRuntime: an id, the base palette it builds on
		 * (colorScheme drives body[data-ds-dark-theme]), and --dsw-alias-*
		 * overrides applied as inline custom properties on <body> by
		 * ui-layout's ThemePresenter. Values are concrete CSS colors (no var()
		 * indirection).
		 */
		const SKINS = [
  {
    "id": "catppuccin-latte",
    "name": "Latte",
    "colorScheme": "light",
    "tokens": {
      "--dsw-alias-bg-base": "#eff1f5",
      "--dsw-alias-bg-layer-1": "#eff1f5",
      "--dsw-alias-bg-layer-2": "#e6e9ef",
      "--dsw-alias-bg-layer-3": "#ccd0da",
      "--dsw-alias-bg-overlay": "#eff1f5",
      "--dsw-alias-bg-mask-1": "rgba(220, 224, 232, 0.24)",
      "--dsw-alias-bg-mask-2": "rgba(220, 224, 232, 0.12)",
      "--dsw-alias-bg-mask-3": "rgba(220, 224, 232, 0.48)",
      "--dsw-alias-bg-module-platform": "#e6e9ef",
      "--dsw-alias-bg-multi-select": "#e6e9ef",
      "--dsw-alias-bg-skeleton": "rgba(204, 208, 218, 0.04)",
      "--dsw-alias-border-l1": "rgba(156, 160, 176, 0.3)",
      "--dsw-alias-border-l2": "rgba(140, 143, 161, 0.5)",
      "--dsw-alias-border-l3": "rgba(140, 143, 161, 0.6)",
      "--dsw-alias-border-l4": "rgba(140, 143, 161, 0.75)",
      "--dsw-alias-label-primary": "#4c4f69",
      "--dsw-alias-label-secondary": "#6c6f85",
      "--dsw-alias-label-tertiary": "#5c5f77",
      "--dsw-alias-label-caption": "#5c5f77",
      "--dsw-alias-label-dimmed": "#5c5f77",
      "--dsw-alias-brand-primary": "#8839ef",
      "--dsw-alias-brand-text": "#eff1f5",
      "--dsw-alias-button-primary-hover": "#7287fd",
      "--dsw-alias-button-primary-dimmed": "#e6e9ef",
      "--dsw-alias-button-elevated-fill": "#eff1f5",
      "--dsw-alias-button-floating-fill": "#eff1f5",
      "--dsw-alias-button-floating-hover": "#e6e9ef",
      "--dsw-alias-button-ghost-active-border": "#bcc0cc",
      "--dsw-alias-button-ghost-active-fill": "#e6e9ef",
      "--dsw-alias-button-ghost-active-hover": "#ccd0da",
      "--dsw-alias-state-business-primary": "#8839ef",
      "--dsw-alias-state-business-tertiary": "#e6e9ef",
      "--dsw-alias-state-error-primary": "#d20f39",
      "--dsw-alias-state-error-secondary": "#d20f39",
      "--dsw-alias-state-success-primary": "#40a02b",
      "--dsw-alias-state-success-secondary": "#40a02b",
      "--dsw-alias-state-success-tertiary": "#e6e9ef",
      "--dsw-alias-state-warn-label": "#fe640b",
      "--dsw-alias-state-warn-primary": "#fe640b",
      "--dsw-alias-state-warn-secondary": "#fe640b",
      "--dsw-alias-state-warn-tertiary": "#e6e9ef",
      "--dsw-alias-interactive-bg-hover": "rgba(204, 208, 218, 0.3)",
      "--dsw-alias-interactive-bg-active": "rgba(188, 192, 204, 0.4)",
      "--dsw-alias-interactive-bg-hover-accent": "rgba(136, 57, 239, 0.1)",
      "--dsw-alias-interactive-bg-hover-danger": "rgba(210, 15, 57, 0.05)",
      "--dsw-alias-interactive-bg-hover-solid": "#e6e9ef",
      "--dsw-alias-markdown-code-block": "#e6e9ef",
      "--dsw-alias-markdown-code-block-banner": "#e6e9ef",
      "--dsw-alias-markdown-code-segment-selected": "#eff1f5",
      "--dsw-alias-markdown-code-segment-unselected": "#e6e9ef",
      "--dsw-alias-markdown-citation": "#e6e9ef",
      "--dsw-alias-markdown-inline-code": "#e6e9ef",
      "--dsw-alias-markdown-placeholder": "#e6e9ef",
      "--dsw-alias-markdown-tag": "#e6e9ef",
      "--dsw-alias-toast-bg": "#ccd0da",
      "--dsw-alias-tooltip-bg": "#bcc0cc",
      "--dsw-specific-sidebar-fill": "#e6e9ef",
      "--dsw-specific-sidebar-nav-item-active": "#bcc0cc",
      "--dsw-specific-sidebar-nav-item-active-accent": "rgba(136, 57, 239, 0.2)",
      "--dsw-specific-sidebar-nav-item-hover": "#ccd0da",
      "--dsw-specific-bubble": "#e6e9ef",
      "--dsw-specific-bubble-highlight": "#ccd0da",
      "--dsw-specific-input-major": "#eff1f5",
      "--dsw-specific-login-input": "#e6e9ef",
      "--dsw-specific-menu": "#e6e9ef",
      "--dsw-specific-selector": "#ccd0da",
      "--dsw-specific-tip": "#e6e9ef",
      "--dsw-alias-scrollbar-bg-l1": "#ccd0da",
      "--dsw-alias-scrollbar-bg-l2": "#bcc0cc",
      "--dsw-alias-scrollbar-hover-l1": "#acb0be",
      "--dsw-alias-scrollbar-hover-l2": "#acb0be",
      "--shiki-foreground": "#4c4f69",
      "--shiki-background": "#e6e9ef",
      "--shiki-token-constant": "#fe640b",
      "--shiki-token-string": "#40a02b",
      "--shiki-token-comment": "#9ca0b0",
      "--shiki-token-keyword": "#8839ef",
      "--shiki-token-parameter": "#e64553",
      "--shiki-token-function": "#1e66f5",
      "--shiki-token-string-expression": "#40a02b",
      "--shiki-token-punctuation": "#8c8fa1",
      "--shiki-token-link": "#dc8a78"
    }
  },
  {
    "id": "catppuccin-frappe",
    "name": "Frappé",
    "colorScheme": "dark",
    "tokens": {
      "--dsw-alias-bg-base": "#303446",
      "--dsw-alias-bg-layer-1": "#292c3c",
      "--dsw-alias-bg-layer-2": "#414559",
      "--dsw-alias-bg-layer-3": "#51576d",
      "--dsw-alias-bg-overlay": "#414559",
      "--dsw-alias-bg-mask-1": "rgba(35, 38, 52, 0.5)",
      "--dsw-alias-bg-mask-2": "rgba(35, 38, 52, 0.2)",
      "--dsw-alias-bg-mask-3": "rgba(35, 38, 52, 0.48)",
      "--dsw-alias-bg-module-platform": "#414559",
      "--dsw-alias-bg-multi-select": "#414559",
      "--dsw-alias-bg-skeleton": "rgba(81, 87, 109, 0.08)",
      "--dsw-alias-border-l1": "rgba(115, 121, 148, 0.25)",
      "--dsw-alias-border-l2": "rgba(131, 139, 167, 0.45)",
      "--dsw-alias-border-l3": "rgba(131, 139, 167, 0.55)",
      "--dsw-alias-border-l4": "rgba(131, 139, 167, 0.7)",
      "--dsw-alias-label-primary": "#c6d0f5",
      "--dsw-alias-label-secondary": "#a5adce",
      "--dsw-alias-label-tertiary": "#b5bfe2",
      "--dsw-alias-label-caption": "#b5bfe2",
      "--dsw-alias-label-dimmed": "#b5bfe2",
      "--dsw-alias-brand-primary": "#ca9ee6",
      "--dsw-alias-brand-text": "#232634",
      "--dsw-alias-button-primary-hover": "#babbf1",
      "--dsw-alias-button-primary-dimmed": "#414559",
      "--dsw-alias-button-elevated-fill": "#414559",
      "--dsw-alias-button-floating-fill": "#51576d",
      "--dsw-alias-button-floating-hover": "#626880",
      "--dsw-alias-button-ghost-active-border": "#626880",
      "--dsw-alias-button-ghost-active-fill": "#414559",
      "--dsw-alias-button-ghost-active-hover": "#51576d",
      "--dsw-alias-state-business-primary": "#ca9ee6",
      "--dsw-alias-state-business-tertiary": "#414559",
      "--dsw-alias-state-error-primary": "#e78284",
      "--dsw-alias-state-error-secondary": "#e78284",
      "--dsw-alias-state-success-primary": "#a6d189",
      "--dsw-alias-state-success-secondary": "#a6d189",
      "--dsw-alias-state-success-tertiary": "#414559",
      "--dsw-alias-state-warn-label": "#e5c890",
      "--dsw-alias-state-warn-primary": "#e5c890",
      "--dsw-alias-state-warn-secondary": "#e5c890",
      "--dsw-alias-state-warn-tertiary": "#414559",
      "--dsw-alias-interactive-bg-hover": "rgba(65, 69, 89, 0.45)",
      "--dsw-alias-interactive-bg-active": "rgba(81, 87, 109, 0.55)",
      "--dsw-alias-interactive-bg-hover-accent": "rgba(202, 158, 230, 0.14)",
      "--dsw-alias-interactive-bg-hover-danger": "rgba(231, 130, 132, 0.15)",
      "--dsw-alias-interactive-bg-hover-solid": "#51576d",
      "--dsw-alias-markdown-code-block": "#292c3c",
      "--dsw-alias-markdown-code-block-banner": "#414559",
      "--dsw-alias-markdown-code-segment-selected": "#414559",
      "--dsw-alias-markdown-code-segment-unselected": "#292c3c",
      "--dsw-alias-markdown-citation": "#414559",
      "--dsw-alias-markdown-inline-code": "#414559",
      "--dsw-alias-markdown-placeholder": "#414559",
      "--dsw-alias-markdown-tag": "#414559",
      "--dsw-alias-toast-bg": "#292c3c",
      "--dsw-alias-tooltip-bg": "#414559",
      "--dsw-specific-sidebar-fill": "#292c3c",
      "--dsw-specific-sidebar-nav-item-active": "#51576d",
      "--dsw-specific-sidebar-nav-item-active-accent": "rgba(202, 158, 230, 0.25)",
      "--dsw-specific-sidebar-nav-item-hover": "#414559",
      "--dsw-specific-bubble": "#414559",
      "--dsw-specific-bubble-highlight": "#51576d",
      "--dsw-specific-input-major": "#292c3c",
      "--dsw-specific-login-input": "#292c3c",
      "--dsw-specific-menu": "#414559",
      "--dsw-specific-selector": "#51576d",
      "--dsw-specific-tip": "#414559",
      "--dsw-alias-scrollbar-bg-l1": "#414559",
      "--dsw-alias-scrollbar-bg-l2": "#51576d",
      "--dsw-alias-scrollbar-hover-l1": "#626880",
      "--dsw-alias-scrollbar-hover-l2": "#626880",
      "--shiki-foreground": "#c6d0f5",
      "--shiki-background": "#292c3c",
      "--shiki-token-constant": "#ef9f76",
      "--shiki-token-string": "#a6d189",
      "--shiki-token-comment": "#838ba7",
      "--shiki-token-keyword": "#ca9ee6",
      "--shiki-token-parameter": "#ea999c",
      "--shiki-token-function": "#8caaee",
      "--shiki-token-string-expression": "#a6d189",
      "--shiki-token-punctuation": "#949cbb",
      "--shiki-token-link": "#f2d5cf"
    }
  },
  {
    "id": "catppuccin-macchiato",
    "name": "Macchiato",
    "colorScheme": "dark",
    "tokens": {
      "--dsw-alias-bg-base": "#24273a",
      "--dsw-alias-bg-layer-1": "#1e2030",
      "--dsw-alias-bg-layer-2": "#363a4f",
      "--dsw-alias-bg-layer-3": "#494d64",
      "--dsw-alias-bg-overlay": "#363a4f",
      "--dsw-alias-bg-mask-1": "rgba(24, 25, 38, 0.5)",
      "--dsw-alias-bg-mask-2": "rgba(24, 25, 38, 0.2)",
      "--dsw-alias-bg-mask-3": "rgba(24, 25, 38, 0.48)",
      "--dsw-alias-bg-module-platform": "#363a4f",
      "--dsw-alias-bg-multi-select": "#363a4f",
      "--dsw-alias-bg-skeleton": "rgba(73, 77, 100, 0.08)",
      "--dsw-alias-border-l1": "rgba(110, 115, 141, 0.25)",
      "--dsw-alias-border-l2": "rgba(128, 135, 162, 0.45)",
      "--dsw-alias-border-l3": "rgba(128, 135, 162, 0.55)",
      "--dsw-alias-border-l4": "rgba(128, 135, 162, 0.7)",
      "--dsw-alias-label-primary": "#cad3f5",
      "--dsw-alias-label-secondary": "#a5adcb",
      "--dsw-alias-label-tertiary": "#b8c0e0",
      "--dsw-alias-label-caption": "#b8c0e0",
      "--dsw-alias-label-dimmed": "#b8c0e0",
      "--dsw-alias-brand-primary": "#c6a0f6",
      "--dsw-alias-brand-text": "#181926",
      "--dsw-alias-button-primary-hover": "#b7bdf8",
      "--dsw-alias-button-primary-dimmed": "#363a4f",
      "--dsw-alias-button-elevated-fill": "#363a4f",
      "--dsw-alias-button-floating-fill": "#494d64",
      "--dsw-alias-button-floating-hover": "#5b6078",
      "--dsw-alias-button-ghost-active-border": "#5b6078",
      "--dsw-alias-button-ghost-active-fill": "#363a4f",
      "--dsw-alias-button-ghost-active-hover": "#494d64",
      "--dsw-alias-state-business-primary": "#c6a0f6",
      "--dsw-alias-state-business-tertiary": "#363a4f",
      "--dsw-alias-state-error-primary": "#ed8796",
      "--dsw-alias-state-error-secondary": "#ed8796",
      "--dsw-alias-state-success-primary": "#a6da95",
      "--dsw-alias-state-success-secondary": "#a6da95",
      "--dsw-alias-state-success-tertiary": "#363a4f",
      "--dsw-alias-state-warn-label": "#eed49f",
      "--dsw-alias-state-warn-primary": "#eed49f",
      "--dsw-alias-state-warn-secondary": "#eed49f",
      "--dsw-alias-state-warn-tertiary": "#363a4f",
      "--dsw-alias-interactive-bg-hover": "rgba(54, 58, 79, 0.45)",
      "--dsw-alias-interactive-bg-active": "rgba(73, 77, 100, 0.55)",
      "--dsw-alias-interactive-bg-hover-accent": "rgba(198, 160, 246, 0.14)",
      "--dsw-alias-interactive-bg-hover-danger": "rgba(237, 135, 150, 0.15)",
      "--dsw-alias-interactive-bg-hover-solid": "#494d64",
      "--dsw-alias-markdown-code-block": "#1e2030",
      "--dsw-alias-markdown-code-block-banner": "#363a4f",
      "--dsw-alias-markdown-code-segment-selected": "#363a4f",
      "--dsw-alias-markdown-code-segment-unselected": "#1e2030",
      "--dsw-alias-markdown-citation": "#363a4f",
      "--dsw-alias-markdown-inline-code": "#363a4f",
      "--dsw-alias-markdown-placeholder": "#363a4f",
      "--dsw-alias-markdown-tag": "#363a4f",
      "--dsw-alias-toast-bg": "#1e2030",
      "--dsw-alias-tooltip-bg": "#363a4f",
      "--dsw-specific-sidebar-fill": "#1e2030",
      "--dsw-specific-sidebar-nav-item-active": "#494d64",
      "--dsw-specific-sidebar-nav-item-active-accent": "rgba(198, 160, 246, 0.25)",
      "--dsw-specific-sidebar-nav-item-hover": "#363a4f",
      "--dsw-specific-bubble": "#363a4f",
      "--dsw-specific-bubble-highlight": "#494d64",
      "--dsw-specific-input-major": "#1e2030",
      "--dsw-specific-login-input": "#1e2030",
      "--dsw-specific-menu": "#363a4f",
      "--dsw-specific-selector": "#494d64",
      "--dsw-specific-tip": "#363a4f",
      "--dsw-alias-scrollbar-bg-l1": "#363a4f",
      "--dsw-alias-scrollbar-bg-l2": "#494d64",
      "--dsw-alias-scrollbar-hover-l1": "#5b6078",
      "--dsw-alias-scrollbar-hover-l2": "#5b6078",
      "--shiki-foreground": "#cad3f5",
      "--shiki-background": "#1e2030",
      "--shiki-token-constant": "#f5a97f",
      "--shiki-token-string": "#a6da95",
      "--shiki-token-comment": "#8087a2",
      "--shiki-token-keyword": "#c6a0f6",
      "--shiki-token-parameter": "#ee99a0",
      "--shiki-token-function": "#8aadf4",
      "--shiki-token-string-expression": "#a6da95",
      "--shiki-token-punctuation": "#939ab7",
      "--shiki-token-link": "#f4dbd6"
    }
  },
  {
    "id": "catppuccin-mocha",
    "name": "Mocha",
    "colorScheme": "dark",
    "tokens": {
      "--dsw-alias-bg-base": "#1e1e2e",
      "--dsw-alias-bg-layer-1": "#181825",
      "--dsw-alias-bg-layer-2": "#313244",
      "--dsw-alias-bg-layer-3": "#45475a",
      "--dsw-alias-bg-overlay": "#313244",
      "--dsw-alias-bg-mask-1": "rgba(17, 17, 27, 0.5)",
      "--dsw-alias-bg-mask-2": "rgba(17, 17, 27, 0.2)",
      "--dsw-alias-bg-mask-3": "rgba(17, 17, 27, 0.48)",
      "--dsw-alias-bg-module-platform": "#313244",
      "--dsw-alias-bg-multi-select": "#313244",
      "--dsw-alias-bg-skeleton": "rgba(69, 71, 90, 0.08)",
      "--dsw-alias-border-l1": "rgba(108, 112, 134, 0.25)",
      "--dsw-alias-border-l2": "rgba(127, 132, 156, 0.45)",
      "--dsw-alias-border-l3": "rgba(127, 132, 156, 0.55)",
      "--dsw-alias-border-l4": "rgba(127, 132, 156, 0.7)",
      "--dsw-alias-label-primary": "#cdd6f4",
      "--dsw-alias-label-secondary": "#a6adc8",
      "--dsw-alias-label-tertiary": "#bac2de",
      "--dsw-alias-label-caption": "#bac2de",
      "--dsw-alias-label-dimmed": "#bac2de",
      "--dsw-alias-brand-primary": "#cba6f7",
      "--dsw-alias-brand-text": "#11111b",
      "--dsw-alias-button-primary-hover": "#b4befe",
      "--dsw-alias-button-primary-dimmed": "#313244",
      "--dsw-alias-button-elevated-fill": "#313244",
      "--dsw-alias-button-floating-fill": "#45475a",
      "--dsw-alias-button-floating-hover": "#585b70",
      "--dsw-alias-button-ghost-active-border": "#585b70",
      "--dsw-alias-button-ghost-active-fill": "#313244",
      "--dsw-alias-button-ghost-active-hover": "#45475a",
      "--dsw-alias-state-business-primary": "#cba6f7",
      "--dsw-alias-state-business-tertiary": "#313244",
      "--dsw-alias-state-error-primary": "#f38ba8",
      "--dsw-alias-state-error-secondary": "#f38ba8",
      "--dsw-alias-state-success-primary": "#a6e3a1",
      "--dsw-alias-state-success-secondary": "#a6e3a1",
      "--dsw-alias-state-success-tertiary": "#313244",
      "--dsw-alias-state-warn-label": "#f9e2af",
      "--dsw-alias-state-warn-primary": "#f9e2af",
      "--dsw-alias-state-warn-secondary": "#f9e2af",
      "--dsw-alias-state-warn-tertiary": "#313244",
      "--dsw-alias-interactive-bg-hover": "rgba(49, 50, 68, 0.45)",
      "--dsw-alias-interactive-bg-active": "rgba(69, 71, 90, 0.55)",
      "--dsw-alias-interactive-bg-hover-accent": "rgba(203, 166, 247, 0.14)",
      "--dsw-alias-interactive-bg-hover-danger": "rgba(243, 139, 168, 0.15)",
      "--dsw-alias-interactive-bg-hover-solid": "#45475a",
      "--dsw-alias-markdown-code-block": "#181825",
      "--dsw-alias-markdown-code-block-banner": "#313244",
      "--dsw-alias-markdown-code-segment-selected": "#313244",
      "--dsw-alias-markdown-code-segment-unselected": "#181825",
      "--dsw-alias-markdown-citation": "#313244",
      "--dsw-alias-markdown-inline-code": "#313244",
      "--dsw-alias-markdown-placeholder": "#313244",
      "--dsw-alias-markdown-tag": "#313244",
      "--dsw-alias-toast-bg": "#181825",
      "--dsw-alias-tooltip-bg": "#313244",
      "--dsw-specific-sidebar-fill": "#181825",
      "--dsw-specific-sidebar-nav-item-active": "#45475a",
      "--dsw-specific-sidebar-nav-item-active-accent": "rgba(203, 166, 247, 0.25)",
      "--dsw-specific-sidebar-nav-item-hover": "#313244",
      "--dsw-specific-bubble": "#313244",
      "--dsw-specific-bubble-highlight": "#45475a",
      "--dsw-specific-input-major": "#181825",
      "--dsw-specific-login-input": "#181825",
      "--dsw-specific-menu": "#313244",
      "--dsw-specific-selector": "#45475a",
      "--dsw-specific-tip": "#313244",
      "--dsw-alias-scrollbar-bg-l1": "#313244",
      "--dsw-alias-scrollbar-bg-l2": "#45475a",
      "--dsw-alias-scrollbar-hover-l1": "#585b70",
      "--dsw-alias-scrollbar-hover-l2": "#585b70",
      "--shiki-foreground": "#cdd6f4",
      "--shiki-background": "#181825",
      "--shiki-token-constant": "#fab387",
      "--shiki-token-string": "#a6e3a1",
      "--shiki-token-comment": "#7f849c",
      "--shiki-token-keyword": "#cba6f7",
      "--shiki-token-parameter": "#eba0ac",
      "--shiki-token-function": "#89b4fa",
      "--shiki-token-string-expression": "#a6e3a1",
      "--shiki-token-punctuation": "#9399b2",
      "--shiki-token-link": "#f5e0dc"
    }
  }
];

		/** Simplified Chinese dictionary (the key-set source of truth). */
		const zh = {
			"skin.title": "Catppuccin 主题",
			"skin.default": "默认",
			"skin.catppuccin-latte": "Latte",
			"skin.catppuccin-frappe": "Frappé",
			"skin.catppuccin-macchiato": "Macchiato",
			"skin.catppuccin-mocha": "Mocha"
		};

		/** English dictionary, checked complete against the zh key set. */
		const en = {
			"skin.title": "Catppuccin theme",
			"skin.default": "Default",
			"skin.catppuccin-latte": "Latte",
			"skin.catppuccin-frappe": "Frappé",
			"skin.catppuccin-macchiato": "Macchiato",
			"skin.catppuccin-mocha": "Mocha"
		};
		//#endregion

		//#region dsh-catppuccin: persistence
		/** Read a localStorage string value (null on absence or error). */
		function readStorage(key) {
			try {
				const value = window.localStorage.getItem(key);
				return typeof value === "string" ? value : null;
			} catch {
				return null;
			}
		}

		/** Write (or remove with null) a localStorage value. */
		function writeStorage(key, value) {
			try {
				if (value === null) window.localStorage.removeItem(key);
				else window.localStorage.setItem(key, value);
			} catch {
				// storage unavailable / quota — the preference stays process-local
			}
		}

		/** Saved skin id (may be unknown/absent). */
		function readSavedSkin() {
			return readStorage(STORAGE_KEY);
		}

		/** Persist a skin choice; DEFAULT_SKIN clears the stored value. */
		function writeSavedSkin(id) {
			writeStorage(STORAGE_KEY, id === DEFAULT_SKIN ? null : id);
		}
		//#endregion

		//#region dsh-catppuccin: settings row store
		/**
		 * Skin row slot store: a mirror of the theme service snapshot. The
		 * plugin's apply-world change listener is the only writer; the row
		 * component reads via props.useStore.
		 */
		function createSkinStore() {
			return (0, _runtime_client.defineStore)({
				init: () => ({
					skin: DEFAULT_SKIN,
					revision: -1
				}),
				actions: {
					sync: (d, skin, revision) => {
						if (revision <= d.revision) return;
						d.skin = skin;
						d.revision = revision;
					}
				}
			});
		}
		//#endregion

		//#region dsh-catppuccin: settings row
		/** Inline style sheet for the row (kept dependency-free). */
		const styles = {
			group: {
				borderBottom: "1px solid var(--dsw-alias-border-l2)",
				display: "flex",
				flexDirection: "column",
				gap: "10px",
				padding: "16px 0"
			},
			title: {
				color: "var(--dsw-alias-label-primary)",
				fontSize: "14px",
				fontWeight: 400,
				lineHeight: "22px"
			},
			grid: {
				display: "flex",
				flexWrap: "wrap",
				gap: "10px"
			},
			card: {
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				gap: "6px",
				width: "96px",
				padding: "3px",
				borderRadius: "10px",
				border: "2px solid transparent",
				background: "transparent",
				cursor: "pointer",
				font: "inherit",
				boxSizing: "border-box"
			},
			cardSelected: {
				borderColor: "var(--dsw-alias-brand-primary)",
				background: "var(--dsw-alias-interactive-bg-hover)"
			},
			cardLabel: {
				color: "var(--dsw-alias-label-secondary)",
				fontSize: "12px",
				lineHeight: "16px",
				whiteSpace: "nowrap"
			},
			cardLabelSelected: {
				color: "var(--dsw-alias-label-primary)"
			},
			swatch: {
				width: "100%",
				height: "52px",
				borderRadius: "8px",
				boxSizing: "border-box",
				padding: "8px",
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				gap: "6px"
			},
			swatchLine: {
				height: "7px",
				borderRadius: "4px"
			},
			defaultSwatch: {
				width: "100%",
				height: "52px",
				borderRadius: "8px",
				boxSizing: "border-box",
				display: "flex",
				overflow: "hidden",
				border: "1px solid var(--dsw-alias-border-l2)"
			}
		};

		/** Mini palette preview driven by one skin's token table. */
		function Swatch({ tokens }) {
			return (0, react_jsx_runtime.jsxs)("div", {
				style: {
					...styles.swatch,
					background: tokens["--dsw-alias-bg-layer-1"],
					border: `1px solid ${tokens["--dsw-alias-border-l2"]}`
				},
				children: [
					(0, react_jsx_runtime.jsx)("div", {
						style: {
							...styles.swatchLine,
							width: "70%",
							background: tokens["--dsw-alias-label-primary"],
							opacity: 0.85
						}
					}),
					(0, react_jsx_runtime.jsx)("div", {
						style: {
							...styles.swatchLine,
							width: "45%",
							background: tokens["--dsw-alias-brand-primary"]
						}
					}),
					(0, react_jsx_runtime.jsx)("div", {
						style: {
							...styles.swatchLine,
							width: "55%",
							background: tokens["--dsw-alias-label-secondary"],
							opacity: 0.55
						}
					})
				]
			});
		}

		/** "Default" chip: follow the built-in appearance (light + dark halves). */
		function DefaultSwatch() {
			return (0, react_jsx_runtime.jsxs)("div", {
				style: styles.defaultSwatch,
				children: [
					(0, react_jsx_runtime.jsx)("div", { style: { flex: 1, background: "#f4f4f5" } }),
					(0, react_jsx_runtime.jsx)("div", { style: { flex: 1, background: "#1c1c20" } })
				]
			});
		}

		/** One selectable skin card. */
		function SkinCard({ skin, selected, onSelect, t }) {
			return (0, react_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: (event) => {
					onSelect();
					// drop focus so a stale focus ring never outlives the selection
					event.currentTarget.blur();
				},
				"aria-pressed": selected,
				style: {
					...styles.card,
					...(selected ? styles.cardSelected : {})
				},
				children: [
					(0, react_jsx_runtime.jsx)(Swatch, { tokens: skin.tokens }),
					(0, react_jsx_runtime.jsx)("span", {
						style: {
							...styles.cardLabel,
							...(selected ? styles.cardLabelSelected : {})
						},
						children: t(`skin.${skin.id}`)
					})
				]
			});
		}

		/**
		 * Skin picker row registered into the Settings → General item slot,
		 * right after the built-in Appearance row: title + a "Default" chip and
		 * one swatch card per Catppuccin flavor.
		 */
		function SkinRow({ t, setSkin, useStore }) {
			const skin = useStore((s) => s.skin);
			const selected = SKINS.some((candidate) => candidate.id === skin) ? skin : null;
			return (0, react_jsx_runtime.jsxs)("div", {
				style: styles.group,
				children: [
					(0, react_jsx_runtime.jsx)("div", {
						style: styles.title,
						children: t("skin.title")
					}),
					(0, react_jsx_runtime.jsxs)("div", {
						style: styles.grid,
						children: [
							(0, react_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: (event) => {
									setSkin(DEFAULT_SKIN);
									// drop focus so a stale focus ring never outlives the selection
									event.currentTarget.blur();
								},
								"aria-pressed": selected === null,
								style: {
									...styles.card,
									...(selected === null ? styles.cardSelected : {})
								},
								children: [
									(0, react_jsx_runtime.jsx)(DefaultSwatch, {}),
									(0, react_jsx_runtime.jsx)("span", {
										style: {
											...styles.cardLabel,
											...(selected === null ? styles.cardLabelSelected : {})
										},
										children: t("skin.default")
									})
								]
							}),
							SKINS.map((skinDefinition) => (0, react_jsx_runtime.jsx)(SkinCard, {
								skin: skinDefinition,
								selected: selected === skinDefinition.id,
								onSelect: () => setSkin(skinDefinition.id),
								t
							}, skinDefinition.id))
						]
					})
				]
			});
		}
		//#endregion

		//#region dsh-catppuccin: client plugin body
		/**
		 * Required services: theme runtime (skins, switching), slots/locale
		 * (the settings row). Persistence is localStorage, so no settings
		 * transport is needed.
		 */
		const inject = [
			"slots",
			"locale",
			"theme"
		];

		/**
		 * Client plugin body: register the Catppuccin flavors into the theme
		 * runtime, restore the saved choice, keep the row's store in sync with
		 * theme/change, and register the picker into Settings → General.
		 * @param ctx - client cordis context.
		 */
		function apply(ctx) {
			const disposers = SKINS.map((skinDefinition) => ctx.theme.register(skinDefinition));
			ctx.effect(() => () => {
				for (const dispose of disposers) dispose();
			}, "dsh-catppuccin: theme registration");

			// Restore the saved skin once (before any user interaction).
			const saved = readSavedSkin();
			if (typeof saved === "string" && saved !== DEFAULT_SKIN && SKINS.some((skinDefinition) => skinDefinition.id === saved)) {
				const current = ctx.theme.getTheme().preference;
				if (current !== saved) ctx.theme.setTheme(saved);
			}

			const skinStore = createSkinStore();
			let skinBound;
			const syncSkin = (snapshot) => {
				skinBound?.sync(snapshot.preference, snapshot.revision);
			};
			ctx.on("theme/change", syncSkin);

			ctx.effect(() => ctx.locale.register(SETTINGS_NS, {
				zh,
				en
			}), "dsh-catppuccin: settings row dictionaries");

			const skinInjected = (actions) => {
				skinBound = actions;
				syncSkin(ctx.theme.getTheme());
				return {
					setSkin: (id) => {
						ctx.theme.setTheme(id);
						writeSavedSkin(id);
					}
				};
			};
			ctx.slots.inject("settings.general.item", () => ctx.slots.register({
				name: "settings.general.item",
				id: "catppuccin",
				order: 20,
				store: skinStore,
				locale: SETTINGS_NS,
				inject: skinInjected
			}, SkinRow));
		}
		//#endregion

		exports.SKINS = SKINS;
		exports.DEFAULT_SKIN = DEFAULT_SKIN;
		exports.apply = apply;
		exports.inject = inject;
		return module.exports;
	}
});
