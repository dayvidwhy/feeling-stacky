import { shallowMount } from '@vue/test-utils'
import banner from '@/components/banner.vue'

describe('banner.vue', () => {
  it('renders correctly', () => {
    const wrapper = shallowMount(banner);
    expect(wrapper).toMatchSnapshot();
  });
});
