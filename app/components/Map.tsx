const Map = () => {
  return (
    <div className='map_wrap float-left clear-both h-full w-full'>
      <div className='mapouter'>
        <div className='gmap_canvas'>
          <iframe
            width='100%'
            height='100%'
            style={{ minHeight: '20.75rem' }}
            id='gmap_canvas'
            src='https://maps.google.com/maps?q=Voorweg%2054a%202713%20RX%20Zoetermeer&t=&z=13&ie=UTF8&iwloc=&output=embed'
          />
          <style
            dangerouslySetInnerHTML={{
              __html:
                '.mapouter{position:relative;text-align:right;height:100%;width:100%;}',
            }}
          />
          <style
            dangerouslySetInnerHTML={{
              __html:
                '.gmap_canvas {overflow:hidden;background:none!important;height:100%;width:100%;}',
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Map;
