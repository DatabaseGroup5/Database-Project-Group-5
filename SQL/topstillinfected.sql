SELECT confirmed.country , confirmed.latest-confirmed.beforelatest as today_confirmed, 
recovered.latest-recovered.beforelatest as "today recovered",
deaths.latest-deaths.beforelatest "today deaths", confirmed.latest AS confirmed, 
recovered.latest AS recovered, confirmed.latest-recovered.latest as still_infected,
deaths.latest AS deaths , population.population AS population
FROM population , deaths, recovered, confirmed 
WHERE confirmed.country = recovered.country 
AND confirmed.country = deaths.country 
AND confirmed.country = population.country
ORDER BY still_infected DESC limit 3;
