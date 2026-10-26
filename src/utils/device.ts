export type DeviceType = 'mobile' | 'desktop'

// Same breakpoint as the mobile layout in App.css
const MOBILE_QUERY = '(max-width: 700px)'

export function getDeviceType(): DeviceType {
  return window.matchMedia(MOBILE_QUERY).matches ? 'mobile' : 'desktop'
}
