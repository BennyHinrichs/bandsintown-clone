<script lang="ts">
  export let handleSearch;

  let inputValue = '';

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(inputValue.toLocaleLowerCase().replace(/ /g, ""));
  };
</script>

<form on:submit={handleSubmit}>
  <img src="https://assets.prod.bandsintown.com/images/loupe.svg" alt="">
  <input bind:value={inputValue} placeholder="Artist Name" type="search" />
</form>

<style>
  form {
    position: relative;
  }
  
  img {
    position: absolute;
    left: 13px;
    top: 18px;
    z-index: 50;
  }

  input {
    position: relative;
    font-size: 16px;
    color: #8F8F8F;
    font-weight: 500;
    height: 47px;
    width: 100%;
    border: solid 1px #CDCDCD;
    border-radius: 3px;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    box-shadow: 0px 1px 3px 0px rgba(0,0,0,0.08);
    padding: 1px 10px 0px 37px;
    outline: none;
    box-sizing: border-box;
    top: 2px;
  }
</style>