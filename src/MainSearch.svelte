<script lang="ts">
  import Artist from "./Artist.svelte";
  import SearchBar from "./SearchBar.svelte";
  
  let artistName = '';
  const handleSearch = (value: string) => {
    artistName = value;
  };
</script>

<SearchBar {handleSearch} />
<Artist {artistName} />