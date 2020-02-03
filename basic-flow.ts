import { step, TestSettings, Until, By, Device } from '@flood/element'
import * as assert from 'assert'

export const settings: TestSettings = {
	device: Device.iPadLandscape,
	userAgent: 'flood-chrome-test',
	clearCache: true,
	disableCache: true,
	waitTimeout: 60000
}

/**
 * flood
 * @version 1.0
 */
export default () => {
	step('Load homepage', async browser => {
		// go to the home page
		let link
		await browser.visit('https://test-the-graph.herokuapp.com')
		await browser.wait(Until.elementIsVisible(By.partialVisibleText('All DAOs')))
	})
	step('Load Genesis Alpha homepage', async browser => {


		// go the the genesis laph "home page"

		let GAlink = By.attr('a', 'href', '/dao/0x294f999356ed03347c7a23bcbcf8d33fa41dc830')
		await browser.wait(Until.elementIsVisible(GAlink))
		const link = await browser.findElement(GAlink)
		await link.click()

		// we should now be on the Genesis Alpha "home page"
		await browser.wait(Until.elementIsVisible(By.partialVisibleText('GenesisProtocol')))
		await browser.wait(Until.elementIsVisible(By.partialVisibleText('Genesis Alpha')))

	})
	step('Load Contribution Reward page', async browser => {

		// clcik on the contribution reward link
		let link
		let CRurl = '/dao/0x294f999356ed03347c7a23bcbcf8d33fa41dc830/scheme/0x28c5b9efd5bdec2c69c613d2df4b5e1b92e44a2d3c2f5092fb45187570029009'
		let CRlink = By.attr('a', 'href', CRurl)
		await browser.wait(Until.elementIsVisible(CRlink))
		link = await browser.findElement(CRlink)
		await link.click()


		// scheme page
		await browser.wait(Until.elementIsVisible(By.partialVisibleText('Contribution Reward')))
		await browser.wait(Until.elementIsVisible(By.partialVisibleText('Boosted Proposals')))
	})
	step('Load History page', async browser => {
		// now move to the history apge
		let link
		let url = '/dao/0x294f999356ed03347c7a23bcbcf8d33fa41dc830/history/'
		let linkElement = By.attr('a', 'href', url)
		await browser.wait(Until.elementIsVisible(linkElement))
		link = await browser.findElement(linkElement)
		await link.click()

		await browser.wait(Until.elementIsVisible(By.partialVisibleText('History')))
		await browser.wait(Until.elementIsVisible(By.partialVisibleText('Proposed by')))
		await browser.takeScreenshot()
	})
}
