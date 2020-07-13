SELECT confirmed.country , confirmed.latest-confirmed.beforelatest as today_confirmed, 
recovered.latest-recovered.beforelatest as today_recovered,
deaths.latest-deaths.beforelatest today_death, confirmed.latest AS confirmed, 
recovered.latest AS recovered, deaths.latest AS deaths , population.population AS population
FROM population , deaths, recovered, confirmed 
WHERE confirmed.country = recovered.country 
AND confirmed.country = deaths.country 
AND confirmed.country = population.country
ORDER BY today_confirmed DESC limit 3;
