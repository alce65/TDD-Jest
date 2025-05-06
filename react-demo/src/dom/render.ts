export function render(selector = 'body') {
    const template = `<p>Sample</p>`
    document.querySelector(selector)?.insertAdjacentHTML('beforeend', template)
}