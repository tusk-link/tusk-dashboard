/*
 * @Author: Drswith
 * @Date: 2020-11-11 02:22:16
 * @LastEditors: Drswith
 * @LastEditTime: 2020-11-11 02:26:45
 * @FilePath: \tusk-dashboard\src\utils\get-page-title.js
 */
import defaultSettings from '@/settings'

const title = defaultSettings.title || 'TUSK'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
