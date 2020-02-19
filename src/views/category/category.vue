<template>
  <div class="wrapper">
    <ul class="content">
      <li>导航1</li>
      <li>导航2</li>
      <li>导航3</li>
      <li>导航4</li>
      <li>导航5</li>
      <li>导航6</li>
      <li>导航7</li>
      <li>导航8</li>
      <li>导航9</li>
      <li>导航10</li>
      <li>导航11</li>
      <li>导航12</li>
      <li>导航13</li>
      <li>导航14</li>
      <li>导航15</li>
      <li>导航16</li>
      <li>导航17</li>
      <li>导航18</li>
      <li>导航19</li>
      <li>导航20</li>
      <li>导航21</li>
      <li>导航22</li>
      <li>导航23</li>
      <li>导航24</li>
      <li>导航25</li>
      <li>导航26</li>
      <li>导航27</li>
      <li>导航28</li>
      <li>导航29</li>
      <li>导航30</li>
      <li>导航31</li>
      <li>导航32</li>
      <li>导航33</li>
      <li>导航34</li>
      <li>导航35</li>
      <li>导航36</li>
      <li>导航37</li>
      <li>导航38</li>
      <li>导航39</li>
      <li>导航40</li>
      <li>导航41</li>
      <li>导航42</li>
      <li>导航43</li>
      <li>导航44</li>
      <li>导航45</li>
      <li>导航46</li>
      <li>导航47</li>
      <li>导航48</li>
      <li>导航49</li>
      <li>导航50</li>
      <li>导航51</li>
      <li>导航52</li>
      <li>导航53</li>
      <li>导航54</li>
      <li>导航55</li>
      <li>导航56</li>
      <li>导航57</li>
      <li>导航58</li>
      <li>导航59</li>
      <li>导航60</li>
      <li>导航61</li>
      <li>导航62</li>
      <li>导航63</li>
      <li>导航64</li>
      <li>导航65</li>
      <li>导航66</li>
      <li>导航67</li>
      <li>导航68</li>
      <li>导航69</li>
      <li>导航70</li>
      <li>导航71</li>
      <li>导航72</li>
      <li>导航73</li>
      <li>导航74</li>
      <li>导航75</li>
      <li>导航76</li>
      <li>导航77</li>
      <li>导航78</li>
      <li>导航79</li>
      <li>导航80</li>
    </ul>
  </div>
</template>

<script>
import BSroll from 'better-scroll'
export default {
  data() {
    return {
      scroll: null
    }
  },
  mounted() {
    let scroll = new BSroll('.wrapper', {
      probeType: 3, // 当为0，1时不能监听滑动操作
      click: true
    })
    scroll.on('scroll', (position) => {
      console.log(position)
    })
    scroll.on('pullingUp', () => {

    })
  },
  components: {

  }
}
</script>

<style scoped>
  .wrapper{
    height: 150px;
    background-color: blue;
    overflow: hidden;
  }
</style>
