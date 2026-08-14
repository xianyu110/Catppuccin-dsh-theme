// Generates themes/catppuccin-<flavor>.json and lib/client.js from
// palette/palette.json. Run from the repo root: node scripts/gen-themes.mjs
import { readFileSync, writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const palette = JSON.parse(readFileSync(join(root, 'palette', 'palette.json'), 'utf8'))

const hexToRgb = (hex) => {
  const value = hex.replace('#', '')
  return [
    parseInt(value.slice(0, 2), 16),
    parseInt(value.slice(2, 4), 16),
    parseInt(value.slice(4, 6), 16),
  ]
}

const rgba = (hex, alpha) => `rgba(${hexToRgb(hex).join(', ')}, ${alpha})`

// Catppuccin color -> --dsw-alias-* token mapping. Entries are either a color
// name or { color, alpha } for translucent roles. light covers latte; dark
// covers frappe/macchiato/mocha (surface order flips between the two). Token
// roles follow the official design-platform.css alias directory.
const TOKEN_MAPS = {
  dark: {
    // static deepseek blues leak into component-level styles (e.g. the
    // "Deep diving" shimmer); override them so themed UI keeps no default blue
    '--dsw-static-deepseek-500': 'mauve',
    '--dsw-static-deepseek-200': 'lavender',
    '--dsw-alias-bg-base': 'base',
    '--dsw-alias-bg-layer-1': 'mantle',
    '--dsw-alias-bg-layer-2': 'surface0',
    '--dsw-alias-bg-layer-3': 'surface1',
    '--dsw-alias-bg-overlay': 'surface0',
    '--dsw-alias-bg-mask-1': { color: 'crust', alpha: 0.5 },
    '--dsw-alias-bg-mask-2': { color: 'crust', alpha: 0.2 },
    '--dsw-alias-bg-mask-3': { color: 'crust', alpha: 0.48 },
    '--dsw-alias-bg-module-platform': 'surface0',
    '--dsw-alias-bg-multi-select': 'surface0',
    '--dsw-alias-bg-skeleton': { color: 'surface1', alpha: 0.08 },
    '--dsw-alias-border-l1': { color: 'overlay0', alpha: 0.25 },
    '--dsw-alias-border-l2': { color: 'overlay1', alpha: 0.45 },
    '--dsw-alias-border-l3': { color: 'overlay1', alpha: 0.55 },
    '--dsw-alias-border-l4': { color: 'overlay1', alpha: 0.7 },
    '--dsw-alias-label-primary': 'text',
    '--dsw-alias-label-secondary': 'subtext0',
    '--dsw-alias-label-tertiary': 'subtext1',
    '--dsw-alias-label-caption': 'subtext1',
    '--dsw-alias-label-dimmed': 'subtext1',
    '--dsw-alias-brand-primary': 'mauve',
    '--dsw-alias-brand-text': 'crust',
    '--dsw-alias-button-primary-hover': 'lavender',
    '--dsw-alias-button-primary-dimmed': 'surface0',
    '--dsw-alias-button-elevated-fill': 'surface0',
    '--dsw-alias-button-floating-fill': 'surface1',
    '--dsw-alias-button-floating-hover': 'surface2',
    '--dsw-alias-button-ghost-active-border': 'surface2',
    '--dsw-alias-button-ghost-active-fill': 'surface0',
    '--dsw-alias-button-ghost-active-hover': 'surface1',
    '--dsw-alias-state-business-primary': 'mauve',
    '--dsw-alias-state-business-tertiary': 'surface0',
    '--dsw-alias-state-error-primary': 'red',
    '--dsw-alias-state-error-secondary': 'red',
    '--dsw-alias-state-success-primary': 'green',
    '--dsw-alias-state-success-secondary': 'green',
    '--dsw-alias-state-success-tertiary': 'surface0',
    '--dsw-alias-state-warn-label': 'yellow',
    '--dsw-alias-state-warn-primary': 'yellow',
    '--dsw-alias-state-warn-secondary': 'yellow',
    '--dsw-alias-state-warn-tertiary': 'surface0',
    '--dsw-alias-interactive-bg-hover': { color: 'surface0', alpha: 0.45 },
    '--dsw-alias-interactive-bg-active': { color: 'surface1', alpha: 0.55 },
    '--dsw-alias-interactive-bg-hover-accent': { color: 'mauve', alpha: 0.14 },
    '--dsw-alias-interactive-bg-hover-danger': { color: 'red', alpha: 0.15 },
    '--dsw-alias-interactive-bg-hover-solid': 'surface1',
    '--dsw-alias-markdown-code-block': 'mantle',
    '--dsw-alias-markdown-code-block-banner': 'surface0',
    '--dsw-alias-markdown-code-segment-selected': 'surface0',
    '--dsw-alias-markdown-code-segment-unselected': 'mantle',
    '--dsw-alias-markdown-citation': 'surface0',
    '--dsw-alias-markdown-inline-code': 'surface0',
    '--dsw-alias-markdown-placeholder': 'surface0',
    '--dsw-alias-markdown-tag': 'surface0',
    '--dsw-alias-toast-bg': 'mantle',
    '--dsw-alias-tooltip-bg': 'surface0',
    '--dsw-specific-sidebar-fill': 'mantle',
    '--dsw-specific-sidebar-nav-item-active': 'surface1',
    '--dsw-specific-sidebar-nav-item-active-accent': { color: 'mauve', alpha: 0.25 },
    '--dsw-specific-sidebar-nav-item-hover': 'surface0',
    '--dsw-specific-bubble': 'surface0',
    '--dsw-specific-bubble-highlight': 'surface1',
    '--dsw-specific-input-major': 'mantle',
    '--dsw-specific-login-input': 'mantle',
    '--dsw-specific-menu': 'surface0',
    '--dsw-specific-selector': 'surface1',
    '--dsw-specific-tip': 'surface0',
    '--dsw-alias-scrollbar-bg-l1': 'surface0',
    '--dsw-alias-scrollbar-bg-l2': 'surface1',
    '--dsw-alias-scrollbar-hover-l1': 'surface2',
    '--dsw-alias-scrollbar-hover-l2': 'surface2',
    '--shiki-foreground': 'text',
    '--shiki-background': 'mantle',
    '--shiki-token-constant': 'peach',
    '--shiki-token-string': 'green',
    '--shiki-token-comment': 'overlay1',
    '--shiki-token-keyword': 'mauve',
    '--shiki-token-parameter': 'maroon',
    '--shiki-token-function': 'blue',
    '--shiki-token-string-expression': 'green',
    '--shiki-token-punctuation': 'overlay2',
    '--shiki-token-link': 'rosewater',
  },
  light: {
    '--dsw-static-deepseek-500': 'mauve',
    '--dsw-static-deepseek-200': 'lavender',
    '--dsw-alias-bg-base': 'base',
    '--dsw-alias-bg-layer-1': 'base',
    '--dsw-alias-bg-layer-2': 'mantle',
    '--dsw-alias-bg-layer-3': 'surface0',
    '--dsw-alias-bg-overlay': 'base',
    '--dsw-alias-bg-mask-1': { color: 'crust', alpha: 0.24 },
    '--dsw-alias-bg-mask-2': { color: 'crust', alpha: 0.12 },
    '--dsw-alias-bg-mask-3': { color: 'crust', alpha: 0.48 },
    '--dsw-alias-bg-module-platform': 'mantle',
    '--dsw-alias-bg-multi-select': 'mantle',
    '--dsw-alias-bg-skeleton': { color: 'surface0', alpha: 0.04 },
    '--dsw-alias-border-l1': { color: 'overlay0', alpha: 0.3 },
    '--dsw-alias-border-l2': { color: 'overlay1', alpha: 0.5 },
    '--dsw-alias-border-l3': { color: 'overlay1', alpha: 0.6 },
    '--dsw-alias-border-l4': { color: 'overlay1', alpha: 0.75 },
    '--dsw-alias-label-primary': 'text',
    '--dsw-alias-label-secondary': 'subtext0',
    '--dsw-alias-label-tertiary': 'subtext1',
    '--dsw-alias-label-caption': 'subtext1',
    '--dsw-alias-label-dimmed': 'subtext1',
    '--dsw-alias-brand-primary': 'mauve',
    '--dsw-alias-brand-text': 'base',
    '--dsw-alias-button-primary-hover': 'lavender',
    '--dsw-alias-button-primary-dimmed': 'mantle',
    '--dsw-alias-button-elevated-fill': 'base',
    '--dsw-alias-button-floating-fill': 'base',
    '--dsw-alias-button-floating-hover': 'mantle',
    '--dsw-alias-button-ghost-active-border': 'surface1',
    '--dsw-alias-button-ghost-active-fill': 'mantle',
    '--dsw-alias-button-ghost-active-hover': 'surface0',
    '--dsw-alias-state-business-primary': 'mauve',
    '--dsw-alias-state-business-tertiary': 'mantle',
    '--dsw-alias-state-error-primary': 'red',
    '--dsw-alias-state-error-secondary': 'red',
    '--dsw-alias-state-success-primary': 'green',
    '--dsw-alias-state-success-secondary': 'green',
    '--dsw-alias-state-success-tertiary': 'mantle',
    '--dsw-alias-state-warn-label': 'peach',
    '--dsw-alias-state-warn-primary': 'peach',
    '--dsw-alias-state-warn-secondary': 'peach',
    '--dsw-alias-state-warn-tertiary': 'mantle',
    '--dsw-alias-interactive-bg-hover': { color: 'surface0', alpha: 0.3 },
    '--dsw-alias-interactive-bg-active': { color: 'surface1', alpha: 0.4 },
    '--dsw-alias-interactive-bg-hover-accent': { color: 'mauve', alpha: 0.1 },
    '--dsw-alias-interactive-bg-hover-danger': { color: 'red', alpha: 0.05 },
    '--dsw-alias-interactive-bg-hover-solid': 'mantle',
    '--dsw-alias-markdown-code-block': 'mantle',
    '--dsw-alias-markdown-code-block-banner': 'mantle',
    '--dsw-alias-markdown-code-segment-selected': 'base',
    '--dsw-alias-markdown-code-segment-unselected': 'mantle',
    '--dsw-alias-markdown-citation': 'mantle',
    '--dsw-alias-markdown-inline-code': 'mantle',
    '--dsw-alias-markdown-placeholder': 'mantle',
    '--dsw-alias-markdown-tag': 'mantle',
    '--dsw-alias-toast-bg': 'surface0',
    '--dsw-alias-tooltip-bg': 'surface1',
    '--dsw-specific-sidebar-fill': 'mantle',
    '--dsw-specific-sidebar-nav-item-active': 'surface1',
    '--dsw-specific-sidebar-nav-item-active-accent': { color: 'mauve', alpha: 0.2 },
    '--dsw-specific-sidebar-nav-item-hover': 'surface0',
    '--dsw-specific-bubble': 'mantle',
    '--dsw-specific-bubble-highlight': 'surface0',
    '--dsw-specific-input-major': 'base',
    '--dsw-specific-login-input': 'mantle',
    '--dsw-specific-menu': 'mantle',
    '--dsw-specific-selector': 'surface0',
    '--dsw-specific-tip': 'mantle',
    '--dsw-alias-scrollbar-bg-l1': 'surface0',
    '--dsw-alias-scrollbar-bg-l2': 'surface1',
    '--dsw-alias-scrollbar-hover-l1': 'surface2',
    '--dsw-alias-scrollbar-hover-l2': 'surface2',
    '--shiki-foreground': 'text',
    '--shiki-background': 'mantle',
    '--shiki-token-constant': 'peach',
    '--shiki-token-string': 'green',
    '--shiki-token-comment': 'overlay0',
    '--shiki-token-keyword': 'mauve',
    '--shiki-token-parameter': 'maroon',
    '--shiki-token-function': 'blue',
    '--shiki-token-string-expression': 'green',
    '--shiki-token-punctuation': 'overlay1',
    '--shiki-token-link': 'rosewater',
  },
}

const FLAVORS = [
  { key: 'latte', id: 'catppuccin-latte', colorScheme: 'light' },
  { key: 'frappe', id: 'catppuccin-frappe', colorScheme: 'dark' },
  { key: 'macchiato', id: 'catppuccin-macchiato', colorScheme: 'dark' },
  { key: 'mocha', id: 'catppuccin-mocha', colorScheme: 'dark' },
]

const buildTokens = (colors, scheme) => {
  const tokens = {}
  for (const [token, mapping] of Object.entries(TOKEN_MAPS[scheme])) {
    const { color, alpha } = typeof mapping === 'string' ? { color: mapping, alpha: null } : mapping
    const hex = colors[color].hex
    tokens[token] = alpha === null ? hex : rgba(hex, alpha)
  }
  return tokens
}

const skins = FLAVORS.map(({ key, id, colorScheme }) => {
  const colors = palette[key].colors
  const skin = {
    id,
    name: palette[key].name,
    colorScheme,
    tokens: buildTokens(colors, colorScheme),
  }
  writeFileSync(
    join(root, 'themes', `${id}.json`),
    JSON.stringify(skin, null, 2) + '\n',
  )
  return skin
})

const template = readFileSync(join(root, 'lib', 'client.tpl.js'), 'utf8')
const client = template.replace('__SKINS__', JSON.stringify(skins, null, 2))
writeFileSync(join(root, 'lib', 'client.js'), client)

console.log(`generated ${skins.length} themes and lib/client.js`)
