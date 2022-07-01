<script lang="ts">
  import Artist from "./Artist.svelte";

  let artistNameRaw = '';
  let artistName = '';

  const handleSearch = (e) => {
    e.preventDefault();
    artistName = artistNameRaw.toLocaleLowerCase().replace(/ /g, "");
  };
</script>

<form on:submit={handleSearch}>
  <input bind:value={artistNameRaw} placeholder="Artist Name" />
  <button>Search</button>
</form>
<Artist {artistName} />