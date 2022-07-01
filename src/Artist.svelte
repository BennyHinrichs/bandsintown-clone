<script lang="ts">
  import {useGetBand} from './queries';
  export let artistName;

  $: queryResult = useGetBand(artistName);
</script>

<section>
  <div class="scrim" />
  {#if Boolean($queryResult.data)}
    <div class="image-container">
      <img class="backdrop-image" src={$queryResult.data.image_url} alt={$queryResult.data.name} />
    </div>
    <div class="content">
      <div class="artist-info">
        <div class="avatar">
          <img src={$queryResult.data.thumb_url} alt={$queryResult.data?.name} />
        </div>
        <div>
          <h1>{$queryResult.data.name || ''}</h1>
          <h3>
            {Intl.NumberFormat().format($queryResult.data.tracker_count)} Followers 
            •
            {Intl.NumberFormat().format($queryResult.data.upcoming_event_count)} Upcoming Concerts
          </h3>
        </div>
      </div>
      <button>Follow</button>
    </div>
  {/if}
</section>

<style>
  section {
    min-height: 195px;
    padding: 30px 50px;
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    color: white;
    border-radius: 4px;
  }

  .scrim {
    position: absolute;
    background-color: rgba(0,0,0,0.5);
    width: 110%;
    height: 100%;
    top: 0px;
    left: 0px;
    right: 0px;
    z-index: -5;
  }

  .image-container {
    position: absolute;
    width: 110%;
    top: -40px;
    left: -20px;
    right: 0px;
    filter: blur(8px);
    z-index: -10;
  }

  .backdrop-image {
    margin-top: -20px;
    width: 100%;
  }

  .content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex: 1;
  }

  .artist-info {
    display: flex;
    align-items: center;
    gap: 30px;
  }

  .avatar {
    border-radius: 100%;
    overflow: hidden;
    display: flex;
    height: 150px;
    width: 150px;
  }

  button {
    font-weight: bold;
    text-align: center;
    height: 40px;
    min-width: 160px;
    justify-content: center;
    border: 1px solid #00b4b3;
    border-radius: 2px;
    cursor: pointer;
    background-color: #00b4b3;
    color: white;
    display: flex;
    align-items: center;
  }
  button:active {
    background-color: #38c8c8
  }

  @media only screen and (min-width: 1024px) {
    section {
    }
  }
</style>