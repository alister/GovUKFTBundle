<?php

namespace UKHomeOffice\Bundle\GovUKFTBundle\DependencyInjection;

use Symfony\Component\DependencyInjection\Loader\YamlFileLoader,
    Symfony\Component\Config\FileLocator,
    Symfony\Component\HttpKernel\DependencyInjection\Extension,
    Symfony\Component\DependencyInjection\ContainerBuilder;


class GovUKFTExtension extends Extension
{

    public function load(array $configs, ContainerBuilder $container)
    {
        $config = array();
        foreach ($configs as $subConfig) {
            $config = array_merge($config, $subConfig);
        }

        if (isset($config['enabled']) && $config['enabled']) {
            
            $loader = new YamlFileLoader(
                $container,
                new FileLocator(__DIR__.'/../Resources/config')
            );
            $loader->load('services.yml');

            // override settings
            foreach($config as $index => $value) {
                $container->setParameter(
                    'ft_config.'.$index,
                    $value
                );
            }
        }   
    }
}