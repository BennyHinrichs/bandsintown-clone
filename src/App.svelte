<script lang="ts">
	import { QueryClient, QueryClientProvider } from '@sveltestack/svelte-query';
	import MainSearch from './MainSearch.svelte';

	const queryClient = new QueryClient();
</script>

<main>
	<QueryClientProvider client={queryClient}>
		<MainSearch />
	</QueryClientProvider>
</main>

<style>
  main {
		display: flex;
		flex-direction: column;
		margin: 0 auto;
    max-width: 546px;
  }

  @media only screen and (min-width: 1024px) {
    main {
			max-width: 1000px;
      width: 1000px;
    }
  }
</style>